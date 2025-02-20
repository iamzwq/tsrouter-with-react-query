import { Box, Button, Typography } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { postQueryOptions } from '~/queries/posts';

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
  const { data } = useSuspenseQuery(postQueryOptions(postId));
  return (
    <>
      <Button onClick={() => navigate({ to: '/posts' })} variant="outlined" startIcon={<ArrowBackIcon />}>
        Go Back to posts
      </Button>

      <Box className="mt-2 flex items-center gap-2 rounded-lg border-2 border-(--palette-primary-main) p-2">
        <Typography color="primary" fontWeight="bold" variant="h3">
          #{data.id}
        </Typography>
        <Box className="grow">
          <Typography fontWeight="bold">{data.title}</Typography>
          <Typography variant="body2">{data.body}</Typography>
        </Box>
      </Box>
    </>
  );
}
