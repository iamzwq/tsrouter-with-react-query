import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/dashboard/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Dashboard' }],
  }),
});

function RouteComponent() {
  return <div>Dashboard Page</div>;
}
