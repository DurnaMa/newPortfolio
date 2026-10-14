function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 font-mono text-xs">
      {tags.map((tag) => (
        <li key={tag} className="px-2 py-1 rounded-sm border border-dress-blues text-accent">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default ProjectTags;
