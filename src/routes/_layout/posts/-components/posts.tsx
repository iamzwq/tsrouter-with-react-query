import { useSuspenseQuery } from '@tanstack/react-query';
import { getPosts } from '../../../../queries/get-posts';
import { Box, Stack, Typography } from '@mui/material';

export default function Posts() {
  const { data: posts } = useSuspenseQuery(getPosts);
  return (
    <Stack spacing={2} p={1}>
      {posts.slice(0, 10).map(post => (
        <Box
          key={post.id}
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
