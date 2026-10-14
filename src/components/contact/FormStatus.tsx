import { useLanguage } from '../../i18n/useLanguage.ts';
import type { Translation } from '../../i18n/translations.ts';
import type { Status } from './contactForm.ts';

const statusMessages: Partial<Record<Status, { textKey: keyof Translation['form']; className: string }>> = {
  success: { textKey: 'success', className: 'text-accent' },
  error: { textKey: 'errorServer', className: 'text-red-400' },
  rateLimited: { textKey: 'errorRateLimit', className: 'text-red-400' },
};

function FormStatus({ status }: { status: Status }) {
  const formTexts = useLanguage().translation.form;
  const statusMessage = statusMessages[status];
  return (
    <p role="status" className="font-mono text-sm min-h-5">
      {statusMessage && <span className={statusMessage.className}>{formTexts[statusMessage.textKey]}</span>}
    </p>
  );
}

export default FormStatus;
