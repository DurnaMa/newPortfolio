function BrowserBar({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-surface-2 border-b border-dress-blues">
      <span className="w-2.5 h-2.5 rounded-full bg-dress-blues" />
      <span className="w-2.5 h-2.5 rounded-full bg-dress-blues" />
      <span className="w-2.5 h-2.5 rounded-full bg-dress-blues" />
      <span className="ml-3 font-mono text-xs text-muted truncate">{url}</span>
    </div>
  );
}

export default BrowserBar;
