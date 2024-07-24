"use client";

// import Link from "next/link";
import { useState } from "react";

import type { Post, User } from "@/types/types";

interface PostsModuleProps {
  posts: Post[];
  users: User[];
}

const PostsModule = (props: PostsModuleProps) => {
  const { posts, users } = props;

  const [userId, setUserId] = useState<number>();

  const postsToDisplay = userId
    ? posts.filter((post) => post.userId === userId)
    : posts;

  const handleClick = (id: number) => {
    if (userId === id) {
      setUserId(undefined);
    } else {
      setUserId(id);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-4">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => {
              handleClick(user.id);
            }}
            className="rounded-full py-2 px-4 mx-2 bg-slate-500 text-white"
          >
            {user.name}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mb-4">
        {postsToDisplay.map((post) => (
          <div
            className="w-96 aspect-square p-2 rounded-md bg-white border hover:shadow-lg transition-all"
            key={post.id}
          >
            {post.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsModule;
