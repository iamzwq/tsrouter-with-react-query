import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/pokemon/$id/')({
  component: RouteComponent,
});

function RouteComponent() {
  const id = Route.useParams().id;
  console.log('id 👉：', { id });
  return <div>Hello "/_authenticated/pokemon/$id/"! {id}</div>;
}
