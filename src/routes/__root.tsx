import { useEffect, useRef } from 'react';
import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, HeadContent, Outlet, useLocation } from '@tanstack/react-router';
import { TopProgressBar, type TopProgressBarHandle } from '~/components/top-progress-bar';
import { useVersionChecker } from '~/hooks';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [{ title: 'Hello' }],
  }),
  component: RootComponent,
  pendingComponent: () => <div>Loading...</div>,
});

function RootComponent() {
  const topProgressBarRef = useRef<TopProgressBarHandle | null>(null);

  useVersionChecker();

  const pathname = useLocation({
    select: location => location.pathname,
  });

  useEffect(() => {
    const tempRef = topProgressBarRef.current;
    tempRef?.start();
    return () => tempRef?.done();
  }, [pathname]);

  return (
    <>
      <HeadContent />
      <Outlet />
      <TopProgressBar ref={topProgressBarRef} />
    </>
  );
}
