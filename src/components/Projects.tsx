import { useLanguage } from '../i18n/LanguageContext.tsx';
import SectionHeading from './SectionHeading.tsx';
import { projects } from '../data/content.ts';

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="box-border px-4 py-24">
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading index="03" command="git clone --list" title={t.projects.heading} />

        <div className="space-y-20">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`flex flex-col gap-8 lg:items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group lg:w-3/5 block rounded-xl border border-dress-blues bg-surface overflow-hidden"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-surface-2 border-b border-dress-blues">
                  <span className="w-2.5 h-2.5 rounded-full bg-dress-blues" />
                  <span className="w-2.5 h-2.5 rounded-full bg-dress-blues" />
                  <span className="w-2.5 h-2.5 rounded-full bg-dress-blues" />
                  <span className="ml-3 font-mono text-xs text-muted truncate">{project.live}</span>
                </div>
                <img
                  src={project.img}
                  alt={`${t.projects.screenshot} ${project.name}`}
                  loading="lazy"
                  className="w-full aspect-video object-cover object-top grayscale-50 group-hover:grayscale-0 group-hover:scale-[1.02] transition duration-300"
                />
              </a>

              <div className="lg:w-2/5 space-y-4">
                <p className="font-mono text-sm text-accent">
                  {t.projects.label} 0{i + 1}
                </p>
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-muted leading-relaxed">{t.projects.descriptions[project.id]}</p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.tags.map((tag) => (
                    <li key={tag} className="px-2 py-1 rounded-sm border border-dress-blues text-accent">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 flex items-center border border-accent text-accent rounded-sm font-mono text-sm hover:bg-accent/10 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 flex items-center bg-accent text-canvas rounded-sm font-mono text-sm font-bold hover:brightness-110 transition"
                  >
                    {t.projects.live} ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
