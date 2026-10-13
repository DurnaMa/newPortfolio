import { useLanguage } from '../i18n/LanguageContext.tsx';
import { contact } from '../data/content.ts';

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative box-border flex flex-col gap-8 items-center justify-center min-h-screen w-full px-4 text-center bg-grid"
    >
      <div className="absolute inset-0 bg-radial from-transparent to-canvas pointer-events-none" />

      <div className="relative flex flex-col gap-8 items-center">
        <p className="font-mono text-sm sm:text-base text-muted">
          <span className="text-accent">$</span> whoami
        </p>
        <p className="text-2xl sm:text-3xl text-accent">{t.hero.subtitle}</p>
        <h1 className="font-mono font-bold text-5xl sm:text-7xl lg:text-8xl">
          Mahir Durna<span className="text-accent animate-blink">_</span>
        </h1>
        <p className="max-w-xl text-muted">{t.hero.intro}</p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#projects"
            className="flex items-center justify-center h-12 px-6 bg-accent text-canvas font-semibold rounded-sm hover:brightness-110 transition"
          >
            {t.hero.btnWork}
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center h-12 px-6 border-2 border-accent text-accent rounded-sm hover:bg-accent/10 transition"
          >
            {t.hero.btnContact}
          </a>
        </div>
        <div className="flex gap-6 items-center pt-4">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="/svg/Github.svg" alt="" className="h-7 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/svg/Linkedin.svg" alt="" className="h-7 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
          <a href={`mailto:${contact.email}`} aria-label={t.hero.email}>
            <img src="/svg/mail.svg" alt="" className="h-7 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 font-mono text-xs text-muted hover:text-accent animate-bounce"
        aria-label={t.hero.scroll}
      >
        scroll ↓
      </a>
    </section>
  );
}

export default Hero;
