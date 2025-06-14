import { Grid } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { LoginForm } from './components/login-form';

export const Route = createFileRoute('/(auth)/login/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Login' }],
  }),
});

function RouteComponent() {
  return (
    <Grid container className="h-screen">
      <Grid size={4} className="bg-black"></Grid>
      <Grid size={8} className="flex items-center justify-center">
        <LoginForm />
      </Grid>
    </Grid>
  );
}
