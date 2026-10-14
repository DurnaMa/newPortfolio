import { useLanguage } from '../../i18n/useLanguage.ts';
import type { Language } from '../../i18n/translations.ts';
import LanguageButton from './LanguageButton.tsx';

const languages: Language[] = ['de', 'en'];

function LanguageToggle() {
  const { translation } = useLanguage();
  return (
    <div role="group" aria-label={translation.nav.switchLanguage} className="flex items-center font-mono text-sm">
      {languages.map((languageCode, index) => (
        <span key={languageCode} className="flex items-center">
          {index > 0 && <span className="px-1.5 text-dress-blues">|</span>}
          <LanguageButton languageCode={languageCode} />
        </span>
      ))}
    </div>
  );
}

export default LanguageToggle;
