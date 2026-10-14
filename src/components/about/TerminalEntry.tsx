function TerminalEntry({ command, output }: { command: string; output: string }) {
  return (
    <>
      <div className="flex items-center space-x-2">
        <span className="text-cyan-400 select-none">$</span>
        <span className="text-gray-400">{command}</span>
      </div>
      <div className="leading-relaxed text-gray-100 pl-2">{output}</div>
    </>
  );
}

export default TerminalEntry;
