import { useEffect, useImperativeHandle, useRef, useState } from 'react';

export type TopProgressBarHandle = {
  start: () => void;
  done: () => void;
};

type TopProgressBarProps = {
  height?: string;
  color?: string;
  ref?: React.Ref<TopProgressBarHandle>;
};

export function TopProgressBar({ height = '4px', color = 'var(--primary-color)', ref }: TopProgressBarProps) {
  const [progress, setProgress] = useState(0); // 进度条的百分比 (0-100)
  const [isActive, setIsActive] = useState(false); // 控制组件的显示与隐藏（以及透明度）

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cleanup = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => cleanup();
  }, []);

  useImperativeHandle(ref, () => ({
    start() {
      cleanup();
      setProgress(10);
      setIsActive(true);

      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev > 90) {
            cleanup();
            return prev;
          }
          return prev + Math.random() * 20;
        });
      }, 400);
    },
    done() {
      cleanup();
      setProgress(100);

      setTimeout(() => {
        setIsActive(false);
        setTimeout(() => {
          setProgress(0);
        }, 500);
      }, 300);
    },
  }));

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height,
        transition: 'opacity 0.5s ease-out',
        opacity: isActive ? 1 : 0,
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height,
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
          transition: 'width 0.3s linear',
        }}
      ></div>
    </div>
  );
}
