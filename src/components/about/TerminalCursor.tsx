function TerminalCursor() {
  return (
    <div className="flex items-center space-x-2 pt-2">
      <span className="text-cyan-400 select-none">$</span>
      <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block align-middle"></span>
    </div>
  );
}

export default TerminalCursor;
