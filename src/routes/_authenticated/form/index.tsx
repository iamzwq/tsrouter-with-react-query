import { createFileRoute } from '@tanstack/react-router';
import { UserForm } from './components/user-form';

export const Route = createFileRoute('/_authenticated/form/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <UserForm />
    </div>
  );
}
