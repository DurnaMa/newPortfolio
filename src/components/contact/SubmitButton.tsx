import { useLanguage } from '../../i18n/useLanguage.ts';

const buttonClass =
  'h-12 px-6 bg-accent text-canvas font-semibold rounded-sm transition hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed';

function SubmitButton({ disabled, sending }: { disabled: boolean; sending: boolean }) {
  const formTexts = useLanguage().translation.form;
  return (
    <button type="submit" disabled={disabled} className={buttonClass}>
      {sending ? formTexts.sending : formTexts.submit}
    </button>
  );
}

export default SubmitButton;
