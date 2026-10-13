import LegalLayout from './LegalLayout.tsx';
import { contact } from '../data/content.ts';
import { useLanguage } from '../i18n/LanguageContext.tsx';

function Impressum() {
  const { t } = useLanguage();

  return (
    <LegalLayout command="cat impressum.md" title={t.impressum.title}>
      <p>{t.impressum.sub}</p>
      <p>
        Mahir Durna
        <br />
        Borkumstr. 3
        <br />
        49696 Molbergen
      </p>
      <h2>{t.impressum.contact}</h2>
      <p>
        {t.impressum.phone} <a href="tel:+491623301449">+49 162 3301449</a>
        <br />
        {t.impressum.email} <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p className="text-sm">
        {t.impressum.source}{' '}
        <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">
          eRecht24
        </a>
      </p>
    </LegalLayout>
  );
}

export default Impressum;
