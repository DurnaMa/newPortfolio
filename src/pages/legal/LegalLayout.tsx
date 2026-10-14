import type { ReactNode } from 'react';
import LegalHeader from './LegalHeader.tsx';

const contentClass =
  'space-y-4 leading-relaxed text-muted [&_h2]:text-text [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:pt-8 [&_h3]:text-text [&_h3]:font-semibold [&_h3]:pt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-accent [&_a]:hover:underline';

type Props = { command: string; title: string; children: ReactNode };

function LegalLayout({ command, title, children }: Props) {
  return (
    <main className="box-border px-4 pt-32 pb-24">
      <article className="max-w-3xl mx-auto">
        <LegalHeader command={command} title={title} />
        <div className={contentClass}>{children}</div>
      </article>
    </main>
  );
}

export default LegalLayout;
