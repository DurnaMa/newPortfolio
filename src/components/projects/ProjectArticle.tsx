import type { Project } from '../../data/content.ts';
import ProjectPreview from './ProjectPreview.tsx';
import ProjectDetails from './ProjectDetails.tsx';

function ProjectArticle({ project, projectNumber }: { project: Project; projectNumber: number }) {
  const directionClass = projectNumber % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row';
  return (
    <article className={`flex flex-col gap-8 lg:items-center ${directionClass}`}>
      <ProjectPreview project={project} />
      <ProjectDetails project={project} projectNumber={projectNumber} />
    </article>
  );
}

export default ProjectArticle;
