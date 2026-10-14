import type { Translation } from '../../i18n/translations.ts';

type FormTexts = Translation['form'];

export type Fields = { name: string; email: string; message: string };
export type FieldName = keyof Fields;
export type FieldErrors = Partial<Fields>;
export type Status = 'idle' | 'sending' | 'success' | 'error' | 'rateLimited';

export class RateLimitError extends Error {}

export const emptyFields: Fields = { name: '', email: '', message: '' };

export const fieldTextKeys: Record<FieldName, { label: keyof FormTexts; placeholder: keyof FormTexts }> = {
  name: { label: 'nameLabel', placeholder: 'namePlaceholder' },
  email: { label: 'emailLabel', placeholder: 'emailPlaceholder' },
  message: { label: 'messageLabel', placeholder: 'messagePlaceholder' },
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validate(fields: Fields, formTexts: FormTexts): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = formTexts.errorName;
  if (!fields.email.trim()) errors.email = formTexts.errorEmailEmpty;
  else if (!isValidEmail(fields.email.trim())) errors.email = formTexts.errorEmailInvalid;
  if (!fields.message.trim()) errors.message = formTexts.errorMessage;
  return errors;
}

function buildPayload(fields: Fields, honeypotValue: string, fillTime: number) {
  return {
    name: fields.name.trim(),
    email: fields.email.trim(),
    message: fields.message.trim(),
    website: honeypotValue,
    fillTime,
  };
}

export async function sendMail(fields: Fields, honeypotValue: string, fillTime: number) {
  const response = await fetch('/mail.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildPayload(fields, honeypotValue, fillTime)),
  });
  if (response.status === 429) throw new RateLimitError();
  const responseData = await response.json();
  if (!response.ok || !responseData.success) throw new Error(responseData.error ?? `Status ${response.status}`);
}
