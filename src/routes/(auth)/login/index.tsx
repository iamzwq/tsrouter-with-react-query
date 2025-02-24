import { Grid2 } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from './-components/login-form';

export const Route = createFileRoute('/(auth)/login/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Login' }],
  }),
});

function RouteComponent() {
  return (
    <Grid2 container className="h-screen">
      <Grid2 size={4} className="bg-black"></Grid2>
      <Grid2 size={8} className="flex items-center justify-center">
        <LoginForm />
      </Grid2>
    </Grid2>
  );
}
