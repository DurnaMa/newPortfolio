import { references } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';
import Section from '../shared/Section.tsx';
import ReferenceCard from './ReferenceCard.tsx';

function References() {
  const referenceTexts = useLanguage().translation.references;
  return (
    <Section id="references" index="04" command="grep -r 'Mahir' ./feedback" title={referenceTexts.heading}>
      <ul className="grid md:grid-cols-3 gap-6">
        {references.map((reference, index) => (
          <ReferenceCard key={reference.author} reference={reference} quote={referenceTexts.items[index]} />
        ))}
      </ul>
    </Section>
  );
}

export default References;
