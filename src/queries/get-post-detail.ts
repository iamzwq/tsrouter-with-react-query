import { queryOptions } from '@tanstack/react-query';

export const getPostDetail = (postId: string) =>
  queryOptions({
    queryKey: ['GET_POST', postId],
    queryFn: async () => {
      const post: Post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)).json();
      return post;
    },
  });
