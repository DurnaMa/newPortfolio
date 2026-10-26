import type { Project } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';
import ProjectChallenge from './ProjectChallenge.tsx';
import ProjectHeading from './ProjectHeading.tsx';
import ProjectTags from './ProjectTags.tsx';
import ProjectLinks from './ProjectLinks.tsx';

function ProjectDetails({ project, projectNumber }: { project: Project; projectNumber: number }) {
  const { translation } = useLanguage();
  return (
    <div className="lg:w-2/5 space-y-4">
      <ProjectHeading name={project.name} projectNumber={projectNumber} />
      <p className="text-muted leading-relaxed">{translation.projects.descriptions[project.id]}</p>
      <ProjectChallenge projectId={project.id} />
      <ProjectTags tags={project.tags} />
      <ProjectLinks project={project} />
    </div>
  );
}

export default ProjectDetails;
