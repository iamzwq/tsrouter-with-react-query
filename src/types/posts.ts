declare global {
  type Post = {
    id: number;
    userId: number;
    body: string;
    title: string;
  };

  type User = {
    id: number;
    name: string;
    email: string;
  };
}
