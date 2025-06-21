import './progress-bar.css';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const transformValue = `translateX(${-100 + progress * 100}%)`;

  const containerClassName = progress === 1 ? 'finished' : '';

  return (
    <div id="progress-root" className={containerClassName}>
      <div
        className="bar"
        style={{
          transform: transformValue,
        }}
      />
    </div>
  );
}
