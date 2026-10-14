import { useLanguage } from '../../i18n/useLanguage.ts';
import EmailLink from '../../components/shared/EmailLink.tsx';

function ImpressumContact() {
  const impressumTexts = useLanguage().translation.impressum;
  return (
    <p>
      {impressumTexts.phone} <a href="tel:+491623301449">+49 162 3301449</a>
      <br />
      {impressumTexts.email} <EmailLink />
    </p>
  );
}

export default ImpressumContact;
