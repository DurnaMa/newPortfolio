// Die Adresse liegt nur rückwärts und ohne @ im Bundle und wird erst im Browser
// zusammengesetzt. So finden Bots sie nicht per Mustersuche im Quelltext.
const reversedLocalPart = 'tcatnoc';
const reversedDomain = 'ed.anrud-riham';
const atSign = String.fromCharCode(64);

function reverseText(text: string) {
  return [...text].reverse().join('');
}

export function emailAddress() {
  return reverseText(reversedLocalPart) + atSign + reverseText(reversedDomain);
}
