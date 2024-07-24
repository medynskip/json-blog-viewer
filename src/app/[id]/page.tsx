import { fetchAPI } from "@/fetchers/fetchers";

import type { Post, User } from "@/types/types";

interface ArticleProps {
  params: {
    id: string;
  };
}

export default async function Article(props: ArticleProps) {
  const {
    params: { id },
  } = props;

  const post = await fetchAPI<Post>(`posts/${id}`);

  const user = await fetchAPI<User>(`users/${post.userId.toString()}`);

  console.log("POST", post);
  console.log("USER", user);

  return (
    <main className="min-h-screen p-24">
      <div>
        <span className="font-bold">{user.name}</span>, {user.email}
      </div>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </main>
  );
}
