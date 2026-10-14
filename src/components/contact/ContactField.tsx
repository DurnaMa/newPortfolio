import { useLanguage } from '../../i18n/useLanguage.ts';
import { fieldTextKeys, type FieldName } from './contactForm.ts';
import type { ContactFormState } from './useContactForm.ts';
import FieldInput from './FieldInput.tsx';

function ContactField({ fieldName, contactForm }: { fieldName: FieldName; contactForm: ContactFormState }) {
  const formTexts = useLanguage().translation.form;
  const textKeys = fieldTextKeys[fieldName];
  const error = contactForm.errorFor(fieldName);
  return (
    <div>
      <label htmlFor={fieldName} className="block font-mono text-sm text-muted mb-2">
        {formTexts[textKeys.label]}
      </label>
      <FieldInput fieldName={fieldName} placeholder={formTexts[textKeys.placeholder]} contactForm={contactForm} />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}

export default ContactField;
