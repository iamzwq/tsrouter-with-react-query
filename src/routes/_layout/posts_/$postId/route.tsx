import { Box, Button, Typography } from '@mui/material';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { postQueryOptions, userQueryOptions } from '~/queries/posts';

export const Route = createFileRoute('/_layout/posts_/$postId')({
  component: RouteComponent,
  loader: async ({ params, context: { queryClient } }) => {
    const { postId } = params;
    return queryClient.ensureQueryData(postQueryOptions(postId));
  },
});

function RouteComponent() {
  const navigate = useNavigate();
  const { postId } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQueryOptions(postId));
  const { data: user } = useQuery(userQueryOptions(post.userId));
  return (
    <>
      <Button onClick={() => navigate({ to: '/posts' })} variant="outlined" startIcon={<ArrowBackIcon />}>
        Go Back to posts
      </Button>

      <Box className="mt-2 flex gap-2 rounded-lg border-2 border-(--palette-primary-main) p-2">
        <Typography color="primary" fontWeight="bold" variant="h3">
          #{post.id}
        </Typography>
        <Box className="grow">
          <Typography variant="h5" fontWeight="bold">
            {post.title}
          </Typography>
          <Typography variant="body2">{post.body}</Typography>
          <Typography variant="body2" fontWeight="bold" color="secondary">
            {user?.name} | {user?.email}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
