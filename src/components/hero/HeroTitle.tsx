import { useLanguage } from '../../i18n/useLanguage.ts';

function HeroTitle() {
  const { translation } = useLanguage();
  return (
    <>
      <p className="font-mono text-sm sm:text-base text-muted">
        <span className="text-accent">$</span> whoami
      </p>
      <p className="text-2xl sm:text-3xl text-accent">{translation.hero.subtitle}</p>
      <h1 className="font-mono font-bold text-5xl sm:text-7xl lg:text-8xl">
        Mahir Durna<span className="text-accent animate-blink">_</span>
      </h1>
    </>
  );
}

export default HeroTitle;
