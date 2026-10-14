import { useLanguage } from '../../i18n/useLanguage.ts';
import ContactEmail from './ContactEmail.tsx';

function ContactIntro() {
  const { translation } = useLanguage();
  return (
    <div className="space-y-6">
      <h3 className="text-3xl sm:text-4xl font-semibold leading-tight">
        {translation.contact.title} <span className="text-accent">{translation.contact.titleAccent}</span>
      </h3>
      <p className="text-muted leading-relaxed">{translation.contact.description}</p>
      <ContactEmail />
    </div>
  );
}

export default ContactIntro;
