import { useLanguage } from '../../i18n/useLanguage.ts';

function ProjectHeading({ name, projectNumber }: { name: string; projectNumber: number }) {
  const { translation } = useLanguage();
  return (
    <>
      <p className="font-mono text-sm text-accent">
        {translation.projects.label} 0{projectNumber}
      </p>
      <h3 className="text-2xl font-semibold">{name}</h3>
    </>
  );
}

export default ProjectHeading;
