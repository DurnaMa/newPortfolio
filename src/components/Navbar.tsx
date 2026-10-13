import { useState } from 'react';
import { navLinks } from '../data/content.ts';
import { useLanguage } from '../i18n/LanguageContext.tsx';
import type { Lang } from '../i18n/translations.ts';

function LangToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div role="group" aria-label={t.nav.switchLang} className="flex items-center font-mono text-sm">
      {(['de', 'en'] as Lang[]).map((option, i) => (
        <span key={option} className="flex items-center">
          {i > 0 && <span className="px-1.5 text-dress-blues">|</span>}
          <button
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={lang === option}
            className={`uppercase transition-colors ${lang === option ? 'text-accent' : 'text-muted hover:text-text'}`}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-canvas/80 backdrop-blur border-b border-dress-blues/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <a href="/#top" className="font-mono text-lg text-text hover:text-accent transition-colors">
          <span className="text-accent">~/</span>mahir-durna
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 font-mono text-sm">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a href={`/${link.href}`} className="text-muted hover:text-accent transition-colors">
                  <span className="text-accent">0{i + 1}.</span> {t.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LangToggle />
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2"
            aria-label={t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className={`h-0.5 w-6 bg-accent transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-accent transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-accent transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-6 pt-2 font-mono border-t border-dress-blues/60">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a href={`/${link.href}`} className="block text-muted hover:text-accent" onClick={() => setOpen(false)}>
                <span className="text-accent">0{i + 1}.</span> {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
