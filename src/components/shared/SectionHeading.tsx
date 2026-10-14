type Props = {
  index: string;
  command: string;
  title: string;
};

function SectionHeading({ index, command, title }: Props) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-muted mb-2">
        <span className="text-accent">{index}.</span> $ {command}
      </p>
      <h2 className="flex items-center gap-4 text-3xl sm:text-4xl font-semibold">
        {title}
        <span className="h-px flex-1 bg-dress-blues" />
      </h2>
    </div>
  );
}

export default SectionHeading;
