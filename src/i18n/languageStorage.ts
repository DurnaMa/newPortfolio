import type { Language } from './translations.ts';

const STORAGE_KEY = 'lang';

export function initialLanguage(): Language {
  try {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    if (storedLanguage === 'de' || storedLanguage === 'en') return storedLanguage;
  } catch {
    // localStorage nicht verfügbar (z. B. privater Modus) – Browsersprache nutzen
  }
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
}

export function storeLanguage(language: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Sprache gilt dann nur für diese Sitzung
  }
}
