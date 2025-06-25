import { Button, Stack } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { progressBar } from '~/components/my-n-progress';

export const Route = createFileRoute('/_authenticated/top-progress-bar/')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: '进度条演示' }],
  }),
});

function RouteComponent() {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={() => progressBar.start()}>开始加载</Button>
      <Button onClick={() => progressBar.done()}>完成加载</Button>
    </Stack>
  );
}
