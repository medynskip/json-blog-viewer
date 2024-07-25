import { fetchAPI } from "@/fetchers/fetchers";

import type { Comment, Post, User } from "@/types/types";

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
  const comments = await fetchAPI<Comment[]>(`posts/${id}/comments`);

  console.log("POST", post);
  console.log("USER", user);
  console.log("comments", comments);

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center py-8">
      <div>
        <span className="font-bold">{user.name}</span>, {user.email}
      </div>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          from: <span>{comment.email}</span>
          title: <span>{comment.name}</span>
          content: <span>{comment.body}</span>
        </div>
      ))}
    </main>
  );
}
