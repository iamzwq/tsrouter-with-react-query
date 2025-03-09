import { useMemo, useRef } from 'react';

/**
 * useMemoizedFn 的主要目的是创建一个稳定的函数引用
 *
 * **主要特点：**
 * 1. 函数引用地址始终保持不变（通过 useMemo 的空依赖数组实现）
 * 2. 但内部始终能调用最新的 callback 函数（通过 useRef 实现）
 *
 * 解决了 React 中函数组件每次渲染都会创建新函数实例的问题，同时保留了访问最新 props 或 state 的能力。
 *
 * **使用注意：**
 * - 如果 callback 本身不依赖任何外部状态，普通的 useCallback(() => fn, []) 就够用了
 * - useMemoizedFn 更适合 callback 需要访问最新状态但又希望保持函数引用稳定的场景
 */
export const useMemoizedFn = <T extends (...args: any[]) => any>(callback: T) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  return useMemo(() => {
    const fn = (...args: Parameters<T>) => callbackRef.current(...args);
    return fn as T;
  }, []);
};
