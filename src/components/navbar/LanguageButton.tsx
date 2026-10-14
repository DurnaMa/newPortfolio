import { useLanguage } from '../../i18n/useLanguage.ts';
import type { Language } from '../../i18n/translations.ts';

function LanguageButton({ languageCode }: { languageCode: Language }) {
  const { language, setLanguage } = useLanguage();
  const isActive = language === languageCode;
  return (
    <button
      type="button"
      onClick={() => setLanguage(languageCode)}
      aria-pressed={isActive}
      className={`uppercase transition-colors ${isActive ? 'text-accent' : 'text-muted hover:text-text'}`}
    >
      {languageCode}
    </button>
  );
}

export default LanguageButton;
