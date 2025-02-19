import { Box, Button, Typography } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { getPostDetail } from '~/queries/get-post-detail';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Route = createLazyFileRoute('/(app)/_layout/posts/$postId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { postId } = Route.useParams();
  const { data } = useSuspenseQuery(getPostDetail(postId));
  return (
    <>
      <Button onClick={() => navigate({ to: '..' })} variant="outlined" startIcon={<ArrowBackIcon />}>
        Go Back to posts
      </Button>

      <Box className="mt-2 flex items-center gap-2 border-2 border-(--palette-primary-main) p-2">
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
