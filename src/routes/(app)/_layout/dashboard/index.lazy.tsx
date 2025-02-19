import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/(app)/_layout/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Dashboard Page</div>;
}
