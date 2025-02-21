import { Box, Button, Typography } from '@mui/material';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { postQueryOptions, userQueryOptions } from '~/api/posts/queries';

export const Route = createFileRoute('/_layout/posts/$id/')({
  component: RouteComponent,
  loader: async ({ params, context: { queryClient } }) => {
    return queryClient.ensureQueryData(postQueryOptions(params.id));
  },
  head: ctx => {
    return {
      meta: [{ title: `Post ${ctx.params.id}` }],
    };
  },
});

function RouteComponent() {
  const navigate = useNavigate();
  const { id } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQueryOptions(id));
  const { data: user } = useQuery(userQueryOptions(post.userId));
  return (
    <>
      <Button onClick={() => navigate({ to: '/posts' })} variant="outlined" startIcon={<ArrowBackIcon />}>
        Go Back to posts
      </Button>

      <Box className="mt-2 flex gap-2 rounded-lg border-2 border-(--primary-color) p-2">
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
