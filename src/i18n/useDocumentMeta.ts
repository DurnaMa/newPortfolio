import { useEffect } from 'react';
import type { Language, Translation } from './translations.ts';

export function useDocumentMeta(language: Language, translation: Translation) {
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = translation.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', translation.meta.description);
  }, [language, translation]);
}
