import type { ReactNode } from 'react';
import SectionHeading from './SectionHeading.tsx';

type Props = { id: string; index: string; command: string; title: string; children: ReactNode };

function Section({ id, index, command, title, children }: Props) {
  return (
    <section id={id} className="box-border px-4 py-24">
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeading index={index} command={command} title={title} />
        {children}
      </div>
    </section>
  );
}

export default Section;
