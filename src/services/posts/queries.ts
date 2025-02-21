import { queryOptions } from '@tanstack/react-query';
import { fetchPost, fetchPosts, fetchUser } from './api';

export const postsQueryOptions = queryOptions({
  queryKey: ['GET_POSTS'],
  queryFn: () => fetchPosts(),
});

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['GET_POST', postId],
    queryFn: () => fetchPost(postId),
  });

export const userQueryOptions = (userId: number) =>
  queryOptions({
    queryKey: ['GET_USER', userId],
    queryFn: () => fetchUser(userId),
    enabled: !!userId,
  });
