function HomeLink({ className = 'hover:text-accent transition-colors' }: { className?: string }) {
  return (
    <a href="/#top" className={className}>
      <span className="text-accent">~/</span>mahir-durna
    </a>
  );
}

export default HomeLink;
