import type { ReactNode } from "react";

type ProgressChecklistProps = {
  name: string;
  tagline: string;
  defaultName: string;
  defaultTagline: string;
  projectsCount: number;
  defaultProjectsCount: number;
  easterEggUnlocked: boolean;
  badge?: ReactNode;
};

const ProgressChecklist = ({
  name,
  tagline,
  defaultName,
  defaultTagline,
  projectsCount,
  defaultProjectsCount,
  easterEggUnlocked,
  badge,
}: ProgressChecklistProps) => {
  const challengeOneDone = name !== defaultName || tagline !== defaultTagline;
  const challengeTwoDone = projectsCount > defaultProjectsCount;

  return (
    <aside className="progress-card" aria-live="polite">
      <div className="progress-header">
        <h3>Live Progress</h3>
        {badge}
      </div>
      <ul>
        <li>
          <span className="status-dot" aria-hidden="true" />
          Starter Kit Running
        </li>
        <li className={challengeOneDone ? "done" : undefined}>
          <span className="status-dot" aria-hidden="true" />
          Challenge 1 Done?
        </li>
        <li className={challengeTwoDone ? "done" : undefined}>
          <span className="status-dot" aria-hidden="true" />
          Challenge 2 Done?
        </li>
        <li className={easterEggUnlocked ? "done" : undefined}>
          <span className="status-dot" aria-hidden="true" />
          Easter Egg Unlocked?
        </li>
      </ul>
    </aside>
  );
};

export default ProgressChecklist;
