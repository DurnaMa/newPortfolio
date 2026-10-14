function TerminalTitleBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-surface-2 border-b border-gray-800 select-none">
      <div className="flex space-x-2">
        <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
        <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
        <span className="w-3 h-3 rounded-full bg-dress-blues"></span>
      </div>
      <span className="text-xs text-muted">mahir@portfolio: ~</span>
      <span className="w-14" />
    </div>
  );
}

export default TerminalTitleBar;
