import { createFileRoute, Link } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Stack, Typography } from '@mui/material';
import { postsQueryOptions } from '~/api/posts/queries';

export const Route = createFileRoute('/_layout/posts/')({
  component: Posts,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(postsQueryOptions);
  },
  head: () => ({
    meta: [{ title: 'Posts' }],
  }),
});

function Posts() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions);
  return (
    <Stack spacing={2} p={1}>
      {posts.slice(0, 10).map(post => (
        <Link
          key={post.id}
          to="/posts/$id"
          params={{ id: post.id + '' }}
          className="flex items-center gap-x-2 rounded-lg border-2 border-(--border-color) p-2 hover:border-(--primary-color)"
        >
          <Typography variant="h4" fontWeight={'bold'} color="primary">
            #{post.id}
          </Typography>
          <Typography variant="body2">{post?.title}</Typography>
        </Link>
      ))}
    </Stack>
  );
}
