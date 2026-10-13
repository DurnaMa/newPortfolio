import { useState, type FormEvent } from 'react';
import SectionHeading from './SectionHeading.tsx';
import { contact } from '../data/content.ts';
import { useLanguage } from '../i18n/LanguageContext.tsx';
import type { Translation } from '../i18n/translations.ts';

type Fields = { name: string; email: string; message: string };
type Status = 'idle' | 'sending' | 'success' | 'error';

const emptyFields: Fields = { name: '', email: '', message: '' };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(fields: Fields, form: Translation['form']): Partial<Fields> {
  const errors: Partial<Fields> = {};
  if (!fields.name.trim()) errors.name = form.errorName;
  if (!fields.email.trim()) errors.email = form.errorEmailEmpty;
  else if (!isValidEmail(fields.email.trim())) errors.email = form.errorEmailInvalid;
  if (!fields.message.trim()) errors.message = form.errorMsg;
  return errors;
}

async function sendMail(fields: Fields) {
  const response = await fetch('/mail.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: fields.name.trim(),
      email: fields.email.trim(),
      message: fields.message.trim(),
    }),
  });
  const data = await response.json();
  if (!response.ok || !data.success) throw new Error(data.error ?? `Status ${response.status}`);
}

const inputClass =
  'w-full rounded-sm border bg-surface px-4 py-3 font-mono text-sm text-text placeholder:text-muted/60 outline-none transition focus:border-accent';

function Contact() {
  const { t } = useLanguage();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const errors = validate(fields, t.form);
  const isReady = Object.keys(errors).length === 0 && privacy && status !== 'sending';

  const update = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
  const touch = (key: keyof Fields) => () => setTouched((prev) => ({ ...prev, [key]: true }));
  const errorFor = (key: keyof Fields) => (touched[key] ? errors[key] : undefined);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isReady) return;

    setStatus('sending');
    try {
      await sendMail(fields);
      setStatus('success');
      setFields(emptyFields);
      setTouched({});
      setPrivacy(false);
    } catch (error) {
      console.error('Mail error:', error);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="box-border px-4 py-24">
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading index="05" command="./contact.sh" title={t.contact.heading} />

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-semibold leading-tight">
              {t.contact.title} <span className="text-accent">{t.contact.titleAccent}</span>
            </h3>
            <p className="text-muted leading-relaxed">{t.contact.desc}</p>
            <p className="font-mono text-sm text-muted">
              <span className="text-accent">$</span> echo $EMAIL
              <br />
              <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
                {contact.email}
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {(
              [
                { key: 'name', label: t.form.nameLabel, placeholder: t.form.namePh, type: 'text' },
                { key: 'email', label: t.form.emailLabel, placeholder: t.form.emailPh, type: 'email' },
              ] as const
            ).map((field) => (
              <div key={field.key}>
                <label htmlFor={field.key} className="block font-mono text-sm text-muted mb-2">
                  {field.label}
                </label>
                <input
                  id={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={fields[field.key]}
                  onChange={update(field.key)}
                  onBlur={touch(field.key)}
                  aria-invalid={!!errorFor(field.key)}
                  className={`${inputClass} ${errorFor(field.key) ? 'border-red-400' : 'border-dress-blues'}`}
                />
                {errorFor(field.key) && <p className="mt-1 text-sm text-red-400">{errorFor(field.key)}</p>}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block font-mono text-sm text-muted mb-2">
                {t.form.msgLabel}
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder={t.form.msgPh}
                value={fields.message}
                onChange={update('message')}
                onBlur={touch('message')}
                aria-invalid={!!errorFor('message')}
                className={`${inputClass} resize-y ${errorFor('message') ? 'border-red-400' : 'border-dress-blues'}`}
              />
              {errorFor('message') && <p className="mt-1 text-sm text-red-400">{errorFor('message')}</p>}
            </div>

            <label className="flex items-start gap-3 text-sm text-muted cursor-pointer">
              <input
                type="checkbox"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                className="mt-1 accent-accent"
              />
              <span>
                {t.form.privacyBefore}{' '}
                <a href="/datenschutz" className="text-accent hover:underline">
                  {t.form.privacyLink}
                </a>{' '}
                {t.form.privacyAfter}
              </span>
            </label>

            <button
              type="submit"
              disabled={!isReady}
              className="h-12 px-6 bg-accent text-canvas font-semibold rounded-sm transition hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? t.form.sending : t.form.submit}
            </button>

            <p role="status" className="font-mono text-sm min-h-5">
              {status === 'success' && <span className="text-accent">{t.form.success}</span>}
              {status === 'error' && <span className="text-red-400">{t.form.errorServer}</span>}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
