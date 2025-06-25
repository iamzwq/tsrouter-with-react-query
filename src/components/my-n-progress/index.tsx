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

export const progressBar = {
  start: () => {
    if (timer) clearInterval(timer);

    status = 0;
    render(0.01); // 立即显示一点点，而不是从0开始

    timer = setInterval(trickle, SETTINGS.trickleSpeed);
  },

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
