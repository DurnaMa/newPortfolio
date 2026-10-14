function LegalHeader({ command, title }: { command: string; title: string }) {
  return (
    <>
      <a href="/" className="font-mono text-sm text-muted hover:text-accent">
        ← cd ..
      </a>
      <p className="font-mono text-sm text-muted mt-8 mb-2">
        <span className="text-accent">$</span> {command}
      </p>
      <h1 className="text-4xl font-semibold mb-10">{title}</h1>
    </>
  );
}

export default LegalHeader;
