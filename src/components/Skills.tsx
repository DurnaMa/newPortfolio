import { useLanguage } from '../i18n/LanguageContext.tsx';
import SectionHeading from './SectionHeading.tsx';
import { learning, skills } from '../data/content.ts';

function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="box-border px-4 py-24">
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading index="02" command="ls ./skills" title={t.skills.heading} />

        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="space-y-6">
            <p className="text-muted leading-relaxed">{t.skills.text}</p>
            <div className="rounded-lg border border-dress-blues bg-surface p-5 font-mono text-sm">
              <p className="text-muted mb-3">
                <span className="text-accent">$</span> git log --learning
              </p>
              <ul className="space-y-1">
                {learning.map((item) => (
                  <li key={item} className="text-text">
                    <span className="text-accent">+</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-muted">
              {t.skills.needSkill}{' '}
              <a href="#contact" className="text-accent hover:underline">
                {t.skills.cta}
              </a>
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-lg border border-dress-blues bg-surface p-5 transition hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              >
                <img src={skill.icon} alt="" className="h-12 w-12 object-contain" />
                <span className="font-mono text-sm text-muted group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
