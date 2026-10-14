import { useLanguage } from '../../i18n/useLanguage.ts';

function ScrollHint() {
  const { translation } = useLanguage();
  return (
    <a
      href="#about"
      className="absolute bottom-8 font-mono text-xs text-muted hover:text-accent animate-bounce"
      aria-label={translation.hero.scroll}
    >
      scroll ↓
    </a>
  );
}

export default ScrollHint;
