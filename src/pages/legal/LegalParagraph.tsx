import type { Inline } from '../../i18n/datenschutz.ts';
import InlineText from './InlineText.tsx';

function LegalParagraph({ text, className }: { text: Inline; className?: string }) {
  return (
    <p className={className}>
      <InlineText text={text} />
    </p>
  );
}

export default LegalParagraph;
