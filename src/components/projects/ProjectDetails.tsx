import type { Project } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';
import ProjectTags from './ProjectTags.tsx';
import ProjectLinks from './ProjectLinks.tsx';

function ProjectDetails({ project, projectNumber }: { project: Project; projectNumber: number }) {
  const { translation } = useLanguage();
  return (
    <div className="lg:w-2/5 space-y-4">
      <p className="font-mono text-sm text-accent">
        {translation.projects.label} 0{projectNumber}
      </p>
      <h3 className="text-2xl font-semibold">{project.name}</h3>
      <p className="text-muted leading-relaxed">{translation.projects.descriptions[project.id]}</p>
      <ProjectTags tags={project.tags} />
      <ProjectLinks project={project} />
    </div>
  );
}

export default ProjectDetails;
