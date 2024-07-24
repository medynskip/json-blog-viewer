"use client";

import { useState } from "react";

import PostCard from "../PostCard/PostCard";

import type { Post, User } from "@/types/types";

interface PostsModuleProps {
  posts: Post[];
  users: User[];
}

const PostsModule = (props: PostsModuleProps) => {
  const { posts, users } = props;

  const [userId, setUserId] = useState<number>();

  const postsToDisplay = userId
    ? posts.filter((post) => userId === post.userId)
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
      <div className="mb-4 flex flex-wrap gap-4">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => {
                handleClick(user.id);
              }}
              className="mx-2 cursor-pointer rounded-full bg-slate-500 px-4 py-2 text-white"
            >
              {user.name}
            </div>
          );
        })}
      </div>
      <div className="mb-4 flex flex-wrap gap-4">
        {postsToDisplay.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostsModule;
