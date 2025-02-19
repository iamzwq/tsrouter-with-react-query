import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/(app)/_layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "home"!</div>;
}
