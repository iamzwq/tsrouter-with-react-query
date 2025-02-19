import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  ),
  beforeLoad: async ({ location }) => {
    console.log('location 👉：', location);
    // TODO: check if user is logged in
    // if (!localStorage.getItem('token')) {
    //   throw redirect({ to: "/login" })
    // }
    // Redirect to dashboard if user is logged in
    // const baseUrl = import.meta.env.VITE_BASE_URL;
    // if ([baseUrl, `${baseUrl}/`].includes(location.pathname)) {
    //   throw redirect({ to: '/dashboard' });
    // }
  },
});
