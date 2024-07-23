import { fetchAPI } from "@/fetchers/fetchers";
import { Post, User } from "@/types/types";
import Link from "next/link";

export default async function Home() {
  const posts = await fetchAPI<Post[]>('posts');
  const users = await fetchAPI<User[]>('users');

  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      <div className="flex flex-wrap gap-4 mb-4">
        {users.map((user) => <Link key={user.id}  href={`/users/${user.username}`}>
            <div className="rounded-full py-2 px-4 mx-2 bg-slate-500 text-white">
              {user.name}
            </div>
          </Link>
        )}
      </div>
      {posts.map((post) => <div className="w-40 aspect-square p-2 rounded bg-white border" key={post.id}>{post.title}</div>)}
    </main>
  );
}
