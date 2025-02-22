import { createFileRoute } from '@tanstack/react-router';
import { OpenModalButton } from './-components/test-modal';
import { Button, Stack } from '@mui/material';
import { toast } from 'react-toastify';
import { OpenFormModalButton } from './-components/form-modal';

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack spacing={2}>
      <div>Welcome Home Page!</div>
      <Stack direction="row" spacing={2}>
        <OpenModalButton />
        <OpenFormModalButton />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="success" onClick={() => toast.success('This is a success toast')}>
          Success Toast
        </Button>
        <Button variant="outlined" color="error" onClick={() => toast.error('This is a error toast')}>
          Error Toast
        </Button>
        <Button variant="outlined" color="warning" onClick={() => toast.warning('This is a warning toast')}>
          Warning Toast
        </Button>
        <Button variant="outlined" color="info" onClick={() => toast.info('This is a info toast')}>
          Info Toast
        </Button>
      </Stack>
    </Stack>
  );
}
