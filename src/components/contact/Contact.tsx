import { useLanguage } from '../../i18n/useLanguage.ts';
import Section from '../shared/Section.tsx';
import ContactIntro from './ContactIntro.tsx';
import ContactForm from './ContactForm.tsx';

function Contact() {
  const { translation } = useLanguage();
  return (
    <Section id="contact" index="05" command="./contact.sh" title={translation.contact.heading}>
      <div className="grid lg:grid-cols-2 gap-12">
        <ContactIntro />
        <ContactForm />
      </div>
    </Section>
  );
}

export default Contact;
