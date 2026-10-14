import { useLanguage } from '../../i18n/useLanguage.ts';
import LearningLog from './LearningLog.tsx';
import SkillsCallToAction from './SkillsCallToAction.tsx';

function SkillsIntro() {
  const { translation } = useLanguage();
  return (
    <div className="space-y-6">
      <p className="text-muted leading-relaxed">{translation.skills.text}</p>
      <LearningLog />
      <SkillsCallToAction />
    </div>
  );
}

export default SkillsIntro;
