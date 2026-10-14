import type { FieldName } from './contactForm.ts';
import type { ContactFormState } from './useContactForm.ts';

const inputClass =
  'w-full rounded-sm border bg-surface px-4 py-3 font-mono text-sm text-text placeholder:text-muted/60 outline-none transition focus:border-accent';

type Props = { fieldName: FieldName; placeholder: string; contactForm: ContactFormState };

function FieldInput({ fieldName, placeholder, contactForm }: Props) {
  const inputProps = { ...contactForm.inputPropsFor(fieldName), placeholder };
  const borderClass = contactForm.errorFor(fieldName) ? 'border-red-400' : 'border-dress-blues';
  if (fieldName === 'message') {
    return <textarea {...inputProps} rows={6} className={`${inputClass} resize-y ${borderClass}`} />;
  }
  const inputType = fieldName === 'email' ? 'email' : 'text';
  return <input {...inputProps} type={inputType} className={`${inputClass} ${borderClass}`} />;
}

export default FieldInput;
