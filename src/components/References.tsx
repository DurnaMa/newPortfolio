import { useLanguage } from '../i18n/LanguageContext.tsx';
import SectionHeading from './SectionHeading.tsx';
import { references } from '../data/content.ts';

function References() {
  const { t } = useLanguage();

  return (
    <section id="references" className="box-border px-4 py-24">
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading index="04" command="grep -r 'Mahir' ./feedback" title={t.references.heading} />

        <ul className="grid md:grid-cols-3 gap-6">
          {references.map((ref, i) => (
            <li
              key={ref.author}
              className="flex flex-col justify-between gap-6 rounded-xl border border-dress-blues bg-surface p-6 hover:border-accent/60 transition-colors"
            >
              <blockquote className="leading-relaxed text-text">
                <span className="font-mono text-3xl text-accent leading-none">“</span>
                <p className="mt-2">{t.references.items[i]}</p>
              </blockquote>
              <p className="font-mono text-sm border-t border-dress-blues pt-4">
                <span className="text-accent">— {ref.author}</span>
                <span className="block text-muted">{ref.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default References;
