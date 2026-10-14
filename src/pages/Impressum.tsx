import { useLanguage } from '../i18n/useLanguage.ts';
import LegalLayout from './legal/LegalLayout.tsx';
import PostalAddress from './legal/PostalAddress.tsx';
import ImpressumContact from './legal/ImpressumContact.tsx';
import ImpressumSource from './legal/ImpressumSource.tsx';

function Impressum() {
  const impressumTexts = useLanguage().translation.impressum;
  return (
    <LegalLayout command="cat impressum.md" title={impressumTexts.title}>
      <p>{impressumTexts.legalBasis}</p>
      <PostalAddress />
      <h2>{impressumTexts.contact}</h2>
      <ImpressumContact />
      <ImpressumSource />
    </LegalLayout>
  );
}

export default Impressum;
