import { createLazyFileRoute } from '@tanstack/react-router';
import { Grid2 } from '@mui/material';
import { LoginForm } from './-components/login-form';

export const Route = createLazyFileRoute('/(auth)/login/')({
  component: RouteComponent,
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
