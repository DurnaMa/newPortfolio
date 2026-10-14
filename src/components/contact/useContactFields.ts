import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage.ts';
import { emptyFields, validate, type FieldName, type Fields } from './contactForm.ts';

type TouchedFields = Partial<Record<FieldName, boolean>>;

const allFieldsTouched: TouchedFields = { name: true, email: true, message: true };

export function useContactFields() {
  const { translation } = useLanguage();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [touchedFields, setTouchedFields] = useState<TouchedFields>({});
  const errors = validate(fields, translation.form);

  const errorFor = (fieldName: FieldName) => (touchedFields[fieldName] ? errors[fieldName] : undefined);

  const inputPropsFor = (fieldName: FieldName) => ({
    id: fieldName,
    value: fields[fieldName],
    onChange: (event: { target: { value: string } }) =>
      setFields((previousFields) => ({ ...previousFields, [fieldName]: event.target.value })),
    onBlur: () => setTouchedFields((previousTouched) => ({ ...previousTouched, [fieldName]: true })),
    'aria-invalid': !!errorFor(fieldName),
  });

  function resetFields() {
    setFields(emptyFields);
    setTouchedFields({});
  }

  return {
    fields,
    hasErrors: Object.keys(errors).length > 0,
    errorFor,
    inputPropsFor,
    touchAllFields: () => setTouchedFields(allFieldsTouched),
    resetFields,
  };
}
