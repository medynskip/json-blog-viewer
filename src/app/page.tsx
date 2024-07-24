import { fetchAPI } from "@/fetchers/fetchers";
import { Post, User } from "@/types/types";
import Link from "next/link";
import PostsModule from "./_components/PostsModule/PostsModule";

export default async function Home() {
  const posts = await fetchAPI<Post[]>('posts');
  const users = await fetchAPI<User[]>('users');

  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <PostsModule posts={posts} users={users} />
    </main>
  );
}
