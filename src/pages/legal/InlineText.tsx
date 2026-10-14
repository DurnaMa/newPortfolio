import type { Inline } from '../../i18n/datenschutz.ts';

function InlineText({ text }: { text: Inline }) {
  if (typeof text === 'string') return text;
  return text.map((part, partIndex) =>
    typeof part === 'string' ? (
      part
    ) : (
      <a key={partIndex} href={part.href} target="_blank" rel="noopener nofollow">
        {part.label}
      </a>
    )
  );
}

export default InlineText;
