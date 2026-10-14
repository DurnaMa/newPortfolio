import type { Project } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';
import { externalLinkProps } from '../shared/externalLinkProps.ts';
import BrowserBar from './BrowserBar.tsx';

const previewClass = 'group lg:w-3/5 block rounded-xl border border-dress-blues bg-surface overflow-hidden';
const screenshotClass =
  'w-full aspect-video object-cover object-top grayscale-50 group-hover:grayscale-0 group-hover:scale-[1.02] transition duration-300';

function ProjectPreview({ project }: { project: Project }) {
  const { translation } = useLanguage();
  const altText = `${translation.projects.screenshot} ${project.name}`;
  return (
    <a href={project.live} {...externalLinkProps} className={previewClass}>
      <BrowserBar url={project.live} />
      <img src={project.image} alt={altText} loading="lazy" className={screenshotClass} />
    </a>
  );
}

export default ProjectPreview;
