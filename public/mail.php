<?php

// Das Formular wird nur von der eigenen Seite (same origin) aufgerufen,
// deshalb gibt es bewusst keine CORS-Header: fremde Websites können den Mailer
// so nicht aus dem Browser heraus missbrauchen.
header("Content-Type: application/json; charset=utf-8");

// >>> DEINE EMAIL HIER EINTRAGEN <<<
$siteEmail = "contact@mahir-durna.de";

// Sendelimit: maximal RATE_LIMIT_MAX Nachrichten pro IP innerhalb von RATE_LIMIT_WINDOW Sekunden
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 3600;

// Fangfeld: Menschen füllen das Formular nicht schneller als in MIN_FILL_SECONDS aus
const MIN_FILL_SECONDS = 3;

// Maximale Feldlängen
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

/** Antwortet wie bei Erfolg, damit Bots nicht merken, dass sie erkannt wurden. */
function silentlyDrop(): void
{
    respond(200, ['success' => true]);
}

function isBot(object $params): bool
{
    // Unsichtbares Feld "website": wird nur von Bots ausgefüllt
    if (!empty($params->website)) {
        return true;
    }

    // Zeitfalle: Ausfülldauer in ms, im Browser gemessen (unabhängig von abweichenden Uhren)
    $fillTime = $params->fillTime ?? null;
    if (!is_int($fillTime) && !is_float($fillTime)) {
        return true;
    }
    return $fillTime < MIN_FILL_SECONDS * 1000;
}

/** Gibt true zurück, wenn diese IP das Limit bereits erreicht hat, sonst wird der Versuch gezählt. */
function isRateLimited(string $ip): bool
{
    $dir = sys_get_temp_dir() . '/portfolio-mail-ratelimit';
    if (!is_dir($dir) && !mkdir($dir, 0700, true) && !is_dir($dir)) {
        return false; // Ohne Speicherort kein Limit, Formular soll trotzdem funktionieren
    }

    // IP nur gehasht speichern (Datenschutz)
    $file = $dir . '/' . hash('sha256', $ip) . '.json';
    $handle = fopen($file, 'c+');
    if ($handle === false) {
        return false;
    }

    flock($handle, LOCK_EX);
    $now = time();
    $timestamps = json_decode(stream_get_contents($handle) ?: '[]', true);
    $timestamps = array_values(array_filter(
        is_array($timestamps) ? $timestamps : [],
        fn($ts) => is_int($ts) && $ts > $now - RATE_LIMIT_WINDOW
    ));

    $limited = count($timestamps) >= RATE_LIMIT_MAX;
    if (!$limited) {
        $timestamps[] = $now;
    }

    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, json_encode($timestamps));
    flock($handle, LOCK_UN);
    fclose($handle);

    return $limited;
}

function stringField(object $params, string $key, int $maxLength): string
{
    $value = $params->$key ?? '';
    if (!is_string($value)) {
        return '';
    }
    $value = trim($value);
    return mb_strlen($value) <= $maxLength ? $value : '';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'error' => 'Method not allowed']);
}

$params = json_decode(file_get_contents('php://input'));
if (!is_object($params)) {
    respond(400, ['success' => false, 'error' => 'Invalid JSON']);
}

if (isBot($params)) {
    silentlyDrop();
}

$email = stringField($params, 'email', MAX_EMAIL);
$name = stringField($params, 'name', MAX_NAME);
$userMessage = stringField($params, 'message', MAX_MESSAGE);

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $name === '' || $userMessage === '') {
    respond(400, ['success' => false, 'error' => 'Invalid input data']);
}

if (isRateLimited($_SERVER['REMOTE_ADDR'] ?? 'unknown')) {
    respond(429, ['success' => false, 'error' => 'Too many requests']);
}

// Sanitize content
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($userMessage, ENT_QUOTES, 'UTF-8'));

$subject = 'Website Contact Form';
$mailBody = "
    <strong>Name:</strong> {$safeName}<br>
    <strong>Email:</strong> {$safeEmail}<br><br>
    <strong>Message:</strong><br>
    {$safeMessage}
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    'From: Website Kontakt <' . $siteEmail . '>',
    'Reply-To: ' . $email,
    'Return-Path: ' . $siteEmail,
];

$success = mail($siteEmail, $subject, $mailBody, implode("\r\n", $headers), '-f ' . $siteEmail);

if ($success) {
    respond(200, ['success' => true]);
}
respond(500, ['success' => false, 'error' => 'Mail delivery failed']);
