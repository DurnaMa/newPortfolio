import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage.ts';

const toggleClass = 'font-mono text-sm text-accent hover:underline';

function ProjectChallenge({ projectId }: { projectId: string }) {
  const { translation } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const challenge = translation.projects.challenges[projectId];
  if (!challenge) return null;
  return (
    <div>
      <button type="button" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className={toggleClass}>
        {isOpen ? '−' : '+'} {translation.projects.challengeLabel}
      </button>
      {isOpen && <p className="mt-2 text-muted leading-relaxed">{challenge}</p>}
    </div>
  );
}

export default ProjectChallenge;
