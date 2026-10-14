import { useLanguage } from '../../i18n/useLanguage.ts';

const primaryButtonClass =
  'flex items-center justify-center h-12 px-6 bg-accent text-canvas font-semibold rounded-sm hover:brightness-110 transition';
const secondaryButtonClass =
  'flex items-center justify-center h-12 px-6 border-2 border-accent text-accent rounded-sm hover:bg-accent/10 transition';

function HeroActions() {
  const { translation } = useLanguage();
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <a href="#projects" className={primaryButtonClass}>
        {translation.hero.buttonProjects}
      </a>
      <a href="#contact" className={secondaryButtonClass}>
        {translation.hero.buttonContact}
      </a>
    </div>
  );
}

export default HeroActions;
