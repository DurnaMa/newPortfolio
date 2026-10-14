import type { Reference } from '../../data/content.ts';

const cardClass =
  'flex flex-col justify-between gap-6 rounded-xl border border-dress-blues bg-surface p-6 hover:border-accent/60 transition-colors';

function ReferenceCard({ reference, quote }: { reference: Reference; quote: string }) {
  return (
    <li className={cardClass}>
      <blockquote className="leading-relaxed text-text">
        <span className="font-mono text-3xl text-accent leading-none">“</span>
        <p className="mt-2">{quote}</p>
      </blockquote>
      <p className="font-mono text-sm border-t border-dress-blues pt-4">
        <span className="text-accent">— {reference.author}</span>
        <span className="block text-muted">{reference.role}</span>
      </p>
    </li>
  );
}

export default ReferenceCard;
