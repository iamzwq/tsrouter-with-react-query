import { createLazyFileRoute } from '@tanstack/react-router';
import Posts from './-components/posts';

export const Route = createLazyFileRoute('/_layout/posts/')({
  component: Posts,
});
