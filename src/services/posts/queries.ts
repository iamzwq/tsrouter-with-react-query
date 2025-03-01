import { keepPreviousData, queryOptions } from '@tanstack/react-query';
import { fetchPost, fetchPosts, fetchUser } from './api';

export const postsQueryOptions = (pagination: Pagination) =>
  queryOptions({
    queryKey: ['GET_POSTS', pagination],
    queryFn: () => fetchPosts(pagination),
    placeholderData: keepPreviousData,
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
