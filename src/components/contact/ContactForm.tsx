import { useContactForm } from './useContactForm.ts';
import HoneypotField from './HoneypotField.tsx';
import ContactField from './ContactField.tsx';
import PrivacyCheckbox from './PrivacyCheckbox.tsx';
import SubmitButton from './SubmitButton.tsx';
import FormStatus from './FormStatus.tsx';

function ContactForm() {
  const contactForm = useContactForm();
  return (
    <form onSubmit={contactForm.handleSubmit} noValidate className="relative space-y-5">
      <HoneypotField value={contactForm.honeypotValue} onChange={contactForm.setHoneypotValue} />
      <ContactField fieldName="name" contactForm={contactForm} />
      <ContactField fieldName="email" contactForm={contactForm} />
      <ContactField fieldName="message" contactForm={contactForm} />
      <PrivacyCheckbox checked={contactForm.privacyAccepted} onChange={contactForm.setPrivacyAccepted} />
      <SubmitButton disabled={!contactForm.isReady} sending={contactForm.status === 'sending'} />
      <FormStatus status={contactForm.status} />
    </form>
  );
}

export default ContactForm;
