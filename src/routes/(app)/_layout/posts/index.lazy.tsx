import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Box, Stack, Typography } from '@mui/material';
import { getPosts } from '~/queries/get-posts';

export const Route = createLazyFileRoute('/(app)/_layout/posts/')({
  component: Posts,
});

function Posts() {
  const { data: posts } = useSuspenseQuery(getPosts);
  return (
    <Stack spacing={2} p={1}>
      {posts.slice(0, 10).map(post => (
        <Box
          key={post.id}
          component={Link}
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: 2,
            p: 2,
            border: '2px solid lightgrey',
            '&:hover': {
              borderColor: 'primary.main',
            },
          }}
          to={`/posts/${post.id}`}
        >
          <Typography variant="h4" fontWeight={'bold'} color="primary">
            #{post.id}
          </Typography>
          <Typography variant="body2">{post?.title}</Typography>
        </Box>
      ))}
    </Stack>
  );
}
