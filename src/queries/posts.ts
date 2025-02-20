import { queryOptions } from '@tanstack/react-query';
import { fetchPost, fetchPosts } from '~/api/posts';

export const postsQueryOptions = queryOptions({
  queryKey: ['GET_POSTS'],
  queryFn: () => fetchPosts(),
});

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['GET_POST', postId],
    queryFn: () => fetchPost(postId),
  });
