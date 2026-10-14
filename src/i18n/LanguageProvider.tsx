import { useState, type ReactNode } from 'react';
import { translations, type Language } from './translations.ts';
import { LanguageContext } from './useLanguage.ts';
import { initialLanguage, storeLanguage } from './languageStorage.ts';
import { useDocumentMeta } from './useDocumentMeta.ts';

function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const translation = translations[language];
  useDocumentMeta(language, translation);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    storeLanguage(nextLanguage);
  }

  return <LanguageContext.Provider value={{ language, setLanguage, translation }}>{children}</LanguageContext.Provider>;
}

export default LanguageProvider;
