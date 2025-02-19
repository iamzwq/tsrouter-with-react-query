import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Dashboard Page</div>;
}
