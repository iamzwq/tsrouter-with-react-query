import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, HeadContent, Outlet } from '@tanstack/react-router';
import { useVersionChecker } from '~/hooks';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [{ title: 'Hello' }],
  }),
  component: RootComponent,
  pendingComponent: () => <div>Loading...</div>,
});

function RootComponent() {
  useVersionChecker();
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  );
}
