import { projects } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';
import Section from '../shared/Section.tsx';
import ProjectArticle from './ProjectArticle.tsx';

function Projects() {
  const { translation } = useLanguage();
  return (
    <Section id="projects" index="03" command="git clone --list" title={translation.projects.heading}>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <ProjectArticle key={project.id} project={project} projectNumber={index + 1} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
