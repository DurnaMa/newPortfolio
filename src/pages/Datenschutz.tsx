import LegalLayout from './LegalLayout.tsx';
import { contact } from '../data/content.ts';
import { useLanguage } from '../i18n/LanguageContext.tsx';
import { datenschutz, type Block, type Inline } from '../i18n/datenschutz.ts';

function Address() {
  const { t } = useLanguage();

  return (
    <p>
      Mahir Durna
      <br />
      Borkumstr. 3
      <br />
      49696 Molbergen
      <br />
      {t.impressum.email} <a href={`mailto:${contact.email}`}>{contact.email}</a>
    </p>
  );
}

function InlineText({ text }: { text: Inline }) {
  if (typeof text === 'string') return text;
  return text.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : (
      <a key={i} href={part.href} target="_blank" rel="noopener nofollow">
        {part.label}
      </a>
    )
  );
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i}>{block.text}</h2>;
    case 'h3':
      return <h3 key={i}>{block.text}</h3>;
    case 'p':
      return (
        <p key={i}>
          <InlineText text={block.text} />
        </p>
      );
    case 'small':
      return (
        <p key={i} className="text-sm italic pt-6">
          <InlineText text={block.text} />
        </p>
      );
    case 'ul':
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'address':
      return <Address key={i} />;
  }
}

function Datenschutz() {
  const { lang } = useLanguage();
  const page = datenschutz[lang];

  return (
    <LegalLayout command="cat datenschutz.md" title={page.title}>
      {page.blocks.map(renderBlock)}
    </LegalLayout>
  );
}

export default Datenschutz;
