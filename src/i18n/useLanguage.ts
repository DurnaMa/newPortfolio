import { createContext, useContext } from 'react';
import type { Language, Translation } from './translations.ts';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  translation: Translation;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage muss innerhalb von <LanguageProvider> verwendet werden');
  return context;
}
