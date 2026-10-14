const cardClass =
  'group flex flex-col items-center justify-center gap-3 rounded-lg border border-dress-blues bg-surface p-5 transition hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]';

function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <li className={cardClass}>
      <img src={icon} alt="" className="h-12 w-12 object-contain" />
      <span className="font-mono text-sm text-muted group-hover:text-accent transition-colors">{name}</span>
    </li>
  );
}

export default SkillCard;
