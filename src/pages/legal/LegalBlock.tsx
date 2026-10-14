import type { Block } from '../../i18n/datenschutz.ts';
import LegalParagraph from './LegalParagraph.tsx';
import BulletList from './BulletList.tsx';
import ResponsiblePerson from './ResponsiblePerson.tsx';

function LegalBlock({ block }: { block: Block }) {
  if (block.type === 'h2') return <h2>{block.text}</h2>;
  if (block.type === 'h3') return <h3>{block.text}</h3>;
  if (block.type === 'p') return <LegalParagraph text={block.text} />;
  if (block.type === 'small') return <LegalParagraph text={block.text} className="text-sm italic pt-6" />;
  if (block.type === 'ul') return <BulletList items={block.items} />;
  return <ResponsiblePerson />;
}

export default LegalBlock;
