import type { QueryClient } from '@tanstack/react-query';
import { HeadContent, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from '~/components/toaster';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [{ title: 'Tanstack Router With React Query' }],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <Toaster />
      <ReactQueryDevtools />
    </>
  ),
});
