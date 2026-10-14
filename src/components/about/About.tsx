import { useLanguage } from '../../i18n/useLanguage.ts';
import Section from '../shared/Section.tsx';
import ProfileImage from './ProfileImage.tsx';
import AboutTerminal from './AboutTerminal.tsx';

function About() {
  const { translation } = useLanguage();
  return (
    <Section id="about" index="01" command="cat about.md" title={translation.about.heading}>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        <ProfileImage />
        <AboutTerminal />
      </div>
    </Section>
  );
}

export default About;
