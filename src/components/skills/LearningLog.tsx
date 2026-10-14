import LearningList from './LearningList.tsx';

function LearningLog() {
  return (
    <div className="rounded-lg border border-dress-blues bg-surface p-5 font-mono text-sm">
      <p className="text-muted mb-3">
        <span className="text-accent">$</span> git log --learning
      </p>
      <LearningList />
    </div>
  );
}

export default LearningLog;
