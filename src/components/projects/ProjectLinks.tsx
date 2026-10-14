import type { Project } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';
import { externalLinkProps } from '../shared/externalLinkProps.ts';

const githubLinkClass =
  'h-10 px-4 flex items-center border border-accent text-accent rounded-sm font-mono text-sm hover:bg-accent/10 transition';
const liveLinkClass =
  'h-10 px-4 flex items-center bg-accent text-canvas rounded-sm font-mono text-sm font-bold hover:brightness-110 transition';

function ProjectLinks({ project }: { project: Project }) {
  const { translation } = useLanguage();
  return (
    <div className="flex gap-4 pt-2">
      <a href={project.github} {...externalLinkProps} className={githubLinkClass}>
        GitHub
      </a>
      <a href={project.live} {...externalLinkProps} className={liveLinkClass}>
        {translation.projects.live} ↗
      </a>
    </div>
  );
}

export default ProjectLinks;
