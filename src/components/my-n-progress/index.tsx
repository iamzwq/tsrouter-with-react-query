// import { useCallback, useImperativeHandle, useRef, useState } from 'react';

// export type TopLoadingBarRef = {
//   start: () => void;
//   finish: () => void;
//   reset: () => void;
// };

// /**
//  * 顶部加载条
//  * @param height bar 高度
//  * @param color bar 颜色
//  * @param ref ref
//  * @example
//  * function App() {
//  *   const loadingBarRef = useRef<TopLoadingBarRef>(null);
//  *   return (
//  *     <>
//  *       <TopLoadingBar ref={loadingBarRef} color="red" height={3} />
//  *       <button onClick={() => loadingBarRef.current?.start()}>开始</button>
//  *       <button onClick={() => loadingBarRef.current?.finish()}>完成</button>
//  *       <button onClick={() => loadingBarRef.current?.reset()}>重置</button>
//  *     </>
//  *   );
//  * }
//  */
// export function TopLoadingBar({
//   height = 3,
//   color = '#29d',
//   ref,
// }: {
//   height?: number;
//   color?: string;
//   ref: React.RefObject<TopLoadingBarRef | null>;
// }) {
//   const [progress, setProgress] = useState(0);
//   const animationRef = useRef<number>(null);

//   const start = useCallback(() => {
//     setProgress(10);
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }

//     const updateProgress = () => {
//       setProgress(prev => {
//         if (prev >= 90) {
//           return prev;
//         }
//         const increment = Math.min(90 - prev, Math.random() * 10);
//         return prev + increment;
//       });

//       // 在进度小于 90 时继续更新
//       if (progress < 90) {
//         animationRef.current = requestAnimationFrame(updateProgress);
//       }
//     };

//     animationRef.current = requestAnimationFrame(updateProgress);
//   }, [progress]);

//   const finish = useCallback(() => {
//     setProgress(100);
//     setTimeout(() => {
//       setProgress(0);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     }, 300);
//   }, []);

//   const reset = useCallback(() => {
//     setProgress(0);
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }
//   }, []);

//   useImperativeHandle(ref, () => ({
//     start,
//     finish,
//     reset,
//   }));

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         height: `${height}px`,
//         backgroundColor: color,
//         transition: 'width 0.3s ease-in-out, opacity 0.3s ease-in-out',
//         width: `${progress}%`,
//         opacity: progress === 0 ? 0 : 1,
//         zIndex: 9999,
//       }}
//     />
//   );
// }

// src/components/top-loading-bar/index.ts

import { createRoot, Root } from 'react-dom/client';
import { ProgressBar } from './progress-bar';

// --- 配置 ---
const SETTINGS = {
  trickleSpeed: 500, // 自动递增的间隔 ms
  animationSpeed: 200, // bar 动画速度 ms
  fadeOutDelay: 500, // 淡出动画时长 ms
};

// --- 模块级状态（单例模式）---
let root: Root | null = null;
let status = 0;
let timer: ReturnType<typeof setInterval> | null = null;

/**
 * 渲染或更新进度条组件
 * @param progress 进度值 (0 to 1)
 */
function render(progress: number) {
  if (!document.getElementById('progress-root')) {
    const container = document.createElement('div');
    container.id = 'progress-root';
    document.body.appendChild(container);
    root = createRoot(container);
  }
  root?.render(<ProgressBar progress={progress} />);
}

/**
 * 卸载组件并清理DOM
 */
function unmount() {
  if (root) {
    root.unmount();
    const container = document.getElementById('progress-root');
    if (container) {
      document.body.removeChild(container);
    }
    root = null;
  }
}

/**
 * 模拟进度自动增加
 */
function trickle() {
  let amount = 0;
  if (status < 0.2) amount = 0.1;
  else if (status < 0.5) amount = 0.04;
  else if (status < 0.8) amount = 0.02;
  else if (status < 0.99) amount = 0.005;

  status = Math.min(status + amount, 0.994); // 确保不会自己达到1
  render(status);
}

// --- 公共 API ---

export const progressBar = {
  /**
   * 开始显示进度条并自动增加
   */
  start: () => {
    // 如果已经开始了，只是重置 trick-timer
    if (timer) clearInterval(timer);

    status = 0;
    render(0.01); // 立即显示一点点，而不是从0开始

    timer = setInterval(trickle, SETTINGS.trickleSpeed);
  },

  /**
   * 完成进度条，然后平滑消失
   */
  done: () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (status > 0) {
      status = 1;
      render(1);

      // 计算总的消失时间：bar动画时间 + css里定义的淡出延迟 + css里定义的淡出动画时间
      const unmountDelay = SETTINGS.animationSpeed + SETTINGS.fadeOutDelay + 200; // css transition-delay

      setTimeout(() => {
        unmount();
        status = 0; // 重置状态
      }, unmountDelay);
    }
  },
};
