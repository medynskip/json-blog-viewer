import { fetchAPI } from "@/fetchers/fetchers";

import PostsModule from "./_components/PostsModule/PostsModule";

import type { Post, User } from "@/types/types";

export default async function Home() {
  const posts = await fetchAPI<Post[]>("posts");
  const users = await fetchAPI<User[]>("users");

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center py-8">
      <PostsModule posts={posts} users={users} />
    </main>
  );
}
