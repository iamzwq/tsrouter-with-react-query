import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { postsQueryOptions } from '~/services/posts/queries';

export const Route = createFileRoute('/_layout/posts/')({
  component: Posts,
  validateSearch: ({ search }) => {
    return search as {
      page?: number;
      limit?: number;
    };
  },
  loaderDeps: ({ search }) => ({
    page: search.page ?? 1,
    limit: search.limit ?? 10,
  }),
  loader: ({ context: { queryClient }, deps: { page, limit } }) => {
    return queryClient.ensureQueryData(postsQueryOptions({ page, limit }));
  },
  head: () => ({
    meta: [{ title: 'Posts' }],
  }),
});

function Posts() {
  const { page = 1, limit = 10 } = Route.useSearch();
  const navigate = Route.useNavigate();
  const { data: posts } = useSuspenseQuery(postsQueryOptions({ page, limit }));
  return (
    <Stack spacing={2}>
      <Box className="flex gap-x-1">
        <Button
          startIcon={<KeyboardArrowLeftIcon />}
          onClick={() => {
            navigate({
              search: {
                page: Math.max(1, page - 1),
                limit,
              },
            });
          }}
        >
          Prev
        </Button>
        <Button
          endIcon={<KeyboardArrowRightIcon />}
          onClick={() => {
            navigate({
              search: {
                page: Math.min(10, page + 1),
                limit,
              },
            });
          }}
        >
          Next
        </Button>
      </Box>
      {posts.map(post => (
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
