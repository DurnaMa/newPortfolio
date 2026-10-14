import { useRef, useState, type FormEvent } from 'react';
import { RateLimitError, sendMail, type Status } from './contactForm.ts';
import { useContactFields } from './useContactFields.ts';

export type ContactFormState = ReturnType<typeof useContactForm>;

export function useContactForm() {
  const contactFields = useContactFields();
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  // Fangfeld: bleibt bei Menschen leer, Bots füllen es aus
  const [honeypotValue, setHoneypotValue] = useState('');
  const [shownAt] = useState(() => Date.now());
  const lastSentAt = useRef(shownAt);
  const isReady = !contactFields.hasErrors && privacyAccepted && status !== 'sending';

  async function submitMessage() {
    setStatus('sending');
    try {
      await sendMail(contactFields.fields, honeypotValue, Date.now() - lastSentAt.current);
      lastSentAt.current = Date.now();
      setStatus('success');
      contactFields.resetFields();
      setPrivacyAccepted(false);
    } catch (error) {
      console.error('Mail error:', error);
      setStatus(error instanceof RateLimitError ? 'rateLimited' : 'error');
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    contactFields.touchAllFields();
    if (isReady) await submitMessage();
  }

  return {
    ...contactFields,
    privacyAccepted,
    setPrivacyAccepted,
    status,
    honeypotValue,
    setHoneypotValue,
    isReady,
    handleSubmit,
  };
}
