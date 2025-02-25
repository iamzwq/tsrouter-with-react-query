import { RefObject, useEffect, useRef, useState } from 'react';

type UseInViewResponse<T extends Element> = [RefObject<T>, boolean];

export const useInView = <T extends Element = Element>(options?: IntersectionObserverInit): UseInViewResponse<T> => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const handleIntersect: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        setIsInView(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return [elementRef as RefObject<T>, isInView];
};
