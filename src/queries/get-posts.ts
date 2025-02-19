import { queryOptions } from '@tanstack/react-query';

export const getPosts = queryOptions({
  queryKey: ['posts'],
  queryFn: async () => {
    const posts: Post[] = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
    return posts;
  },
});
