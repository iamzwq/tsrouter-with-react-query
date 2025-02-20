import { createFileRoute } from '@tanstack/react-router';
import { OpenModalButton } from './-components/test-modal';
import { Button, Stack } from '@mui/material';
import { toast } from 'react-toastify';

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack spacing={2}>
      <div>Welcome Home Page!</div>
      <div>
        <OpenModalButton />
      </div>
      <div>
        <Button variant="outlined" onClick={() => toast.success('This is a success toast')}>
          Success Toast
        </Button>
      </div>
    </Stack>
  );
}
