import { useLanguage } from '../../i18n/useLanguage.ts';
import HeroTitle from './HeroTitle.tsx';
import HeroActions from './HeroActions.tsx';
import SocialLinks from './SocialLinks.tsx';

function HeroContent() {
  const { translation } = useLanguage();
  return (
    <div className="relative flex flex-col gap-8 items-center">
      <HeroTitle />
      <p className="max-w-xl text-muted">{translation.hero.intro}</p>
      <HeroActions />
      <SocialLinks />
    </div>
  );
}

export default HeroContent;
