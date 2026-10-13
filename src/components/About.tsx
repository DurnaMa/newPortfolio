import { useLanguage } from '../i18n/LanguageContext.tsx';
import SectionHeading from './SectionHeading.tsx';

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="box-border px-4 py-24">
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading index="01" command="cat about.md" title={t.about.heading} />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full max-w-lg mx-auto lg:mx-0 lg:w-5/12 lg:max-w-none shrink-0 lg:sticky lg:top-24">
          <img
            src="/profilbild/mahirDurna-large.jpg"
            srcSet="/profilbild/mahirDurna-medium.jpg 800w, /profilbild/mahirDurna-large.jpg 1200w, /profilbild/mahirDurna.jpg 2000w"
            sizes="(min-width: 1024px) 480px, (min-width: 512px) 512px, 100vw"
            alt="Mahir Durna"
            className="w-full aspect-[7/6] object-cover object-[65%_center] rounded-lg border-2 border-dress-blues grayscale hover:grayscale-0 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          />
        </div>

        <div className="flex-1 w-full bg-surface rounded-xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm sm:text-base">
          <div className="flex items-center justify-between px-4 py-3 bg-surface-2 border-b border-gray-800 select-none">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
              <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
              <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
            </div>
            <span className="text-xs text-muted">mahir@portfolio: ~</span>
            <span className="w-14" />
          </div>

          <div className="p-6 space-y-4 text-gray-300 min-h-45">
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 select-none">$</span>
              <span className="text-gray-400">cat about.md</span>
            </div>
            <div className="leading-relaxed text-gray-100 pl-2">{t.about.text}</div>

            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 select-none">$</span>
              <span className="text-gray-400">cat location.md</span>
            </div>
            <div className="leading-relaxed text-gray-100 pl-2">
              {t.about.location}
              <br />
              {t.about.workMode}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 select-none">$</span>
              <span className="text-gray-400">cat approach.md</span>
            </div>
            <div className="leading-relaxed text-gray-100 pl-2">{t.about.approach}</div>

            <div className="flex items-center space-x-2 pt-2">
              <span className="text-cyan-400 select-none">$</span>
              <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block align-middle"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
