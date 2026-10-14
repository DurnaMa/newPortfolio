import { useLanguage } from '../../i18n/useLanguage.ts';
import TerminalTitleBar from './TerminalTitleBar.tsx';
import TerminalEntry from './TerminalEntry.tsx';
import TerminalCursor from './TerminalCursor.tsx';

function AboutTerminal() {
  const { translation } = useLanguage();
  return (
    <div className="flex-1 w-full bg-surface rounded-xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-sm sm:text-base">
      <TerminalTitleBar />
      <div className="p-6 space-y-4 text-gray-300 min-h-45">
        <TerminalEntry command="cat about.md" output={translation.about.text} />
        <TerminalEntry command="cat location.md" output={translation.about.location} />
        <TerminalEntry command="cat approach.md" output={translation.about.approach} />
        <TerminalCursor />
      </div>
    </div>
  );
}

export default AboutTerminal;
