import { learning } from '../../data/content.ts';

function LearningList() {
  return (
    <ul className="space-y-1">
      {learning.map((technology) => (
        <li key={technology} className="text-text">
          <span className="text-accent">+</span> {technology}
        </li>
      ))}
    </ul>
  );
}

export default LearningList;
