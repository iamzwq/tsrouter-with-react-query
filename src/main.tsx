import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createRouter, ErrorComponent } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { routeTree } from './routeTree.gen';

import.meta.glob('./styles/*.css', { eager: true });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 600_000, // 10 minutes
    },
  },
});

const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPendingComponent: () => <div>Loading...</div>,
  defaultErrorComponent: ({ error }) => {
    return <ErrorComponent error={error} />;
  },
  basepath: import.meta.env.VITE_BASE_URL,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme} noSsr>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
