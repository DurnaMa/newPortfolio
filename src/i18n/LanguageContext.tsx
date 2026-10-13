import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type Translation } from './translations.ts';

const STORAGE_KEY = 'lang';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'de' || stored === 'en') return stored;
  } catch {
    // localStorage nicht verfügbar (z. B. privater Modus) – Browsersprache nutzen
  }
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
  }, [lang, t]);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sprache gilt dann nur für diese Sitzung
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage muss innerhalb von <LanguageProvider> verwendet werden');
  return context;
}
