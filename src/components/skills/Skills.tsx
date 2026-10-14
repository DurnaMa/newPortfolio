import { useLanguage } from '../../i18n/useLanguage.ts';
import Section from '../shared/Section.tsx';
import SkillsIntro from './SkillsIntro.tsx';
import SkillGrid from './SkillGrid.tsx';

function Skills() {
  const { translation } = useLanguage();
  return (
    <Section id="skills" index="02" command="ls ./skills" title={translation.skills.heading}>
      <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
        <SkillsIntro />
        <SkillGrid />
      </div>
    </Section>
  );
}

export default Skills;
