import type { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRootRouteWithContext, HeadContent, Outlet } from '@tanstack/react-router';
import { Toaster } from '~/components/toaster';
import { useVersionChecker } from '~/hooks';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [{ title: 'Tanstack Router With React Query' }],
  }),
  component: RootComponent,
});

function RootComponent() {
  useVersionChecker();
  return (
    <>
      <HeadContent />
      <Outlet />
      <Toaster />
      <ReactQueryDevtools />
    </>
  );
}
