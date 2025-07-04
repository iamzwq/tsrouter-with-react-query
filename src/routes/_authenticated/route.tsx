import { createFileRoute } from '@tanstack/react-router';
import { AuthenticatedLayout } from '~/layout/authenticated-layout';

export const Route = createFileRoute('/_authenticated')({
  component: AuthenticatedLayout,
  head: () => ({
    meta: [{ title: '管理后台' }],
  }),
});
