import { skills } from '../../data/content.ts';
import SkillCard from './SkillCard.tsx';

function SkillGrid() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
      ))}
    </ul>
  );
}

export default SkillGrid;
