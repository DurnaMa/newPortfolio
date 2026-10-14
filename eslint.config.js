import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Aussagekräftige Namen statt einzelner Buchstaben
      'id-length': ['error', { min: 2 }],
    },
  },
  {
    // Komponenten bleiben kurz: lange Templates in Unterkomponenten auslagern
    files: ['src/**/*.tsx'],
    rules: {
      'max-lines-per-function': ['error', { max: 14 }],
    },
  },
]);
