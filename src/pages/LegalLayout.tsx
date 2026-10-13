import type { ReactNode } from 'react';

type Props = {
  command: string;
  title: string;
  children: ReactNode;
};

function LegalLayout({ command, title, children }: Props) {
  return (
    <main className="box-border px-4 pt-32 pb-24">
      <article className="max-w-3xl mx-auto">
        <a href="/" className="font-mono text-sm text-muted hover:text-accent">
          ← cd ..
        </a>
        <p className="font-mono text-sm text-muted mt-8 mb-2">
          <span className="text-accent">$</span> {command}
        </p>
        <h1 className="text-4xl font-semibold mb-10">{title}</h1>
        <div className="space-y-4 leading-relaxed text-muted [&_h2]:text-text [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:pt-8 [&_h3]:text-text [&_h3]:font-semibold [&_h3]:pt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-accent [&_a]:hover:underline">
          {children}
        </div>
      </article>
    </main>
  );
}

export default LegalLayout;
