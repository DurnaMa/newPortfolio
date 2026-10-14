import { useLanguage } from '../../i18n/useLanguage.ts';

function SkillsCallToAction() {
  const { translation } = useLanguage();
  return (
    <p className="text-muted">
      {translation.skills.stackQuestion}{' '}
      <a href="#contact" className="text-accent hover:underline">
        {translation.skills.callToAction}
      </a>
    </p>
  );
}

export default SkillsCallToAction;
