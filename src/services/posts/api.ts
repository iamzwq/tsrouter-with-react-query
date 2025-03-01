export const fetchPosts = async (pagination: Pagination) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  // pagination
  const start = (pagination.page - 1) * pagination.limit;
  const end = start + pagination.limit;
  const paginatedPosts = posts.slice(start, end);
  return paginatedPosts;
};

export const fetchPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();
  return post;
};

export const fetchUser = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();
  return user;
};
