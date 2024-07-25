"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { fetchAPI } from "@/fetchers/fetchers";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import PostCard from "../PostCard/PostCard";

import type { Post, User } from "@/types/types";

interface PostsModuleProps {
  posts: Post[];
  users: User[];
}

const PostsModule = (props: PostsModuleProps) => {
  const { users } = props;

  const { intersecting, target } = useIntersectionObserver();
  const [userId, setUserId] = useState<number>();

  const { data, isFetching, fetchNextPage } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: async ({ pageParam }) =>
      fetchAPI<Post[]>(`posts?_start=${pageParam.toString()}&_limit=5`),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage[lastPage.length - 1].id,
  });

  // const postsToDisplay = userId
  //   ? posts.filter((post) => userId === post.userId)
  //   : posts;

  console.log("data", data);
  console.log("isFetching", isFetching);

  useEffect(() => {
    if (intersecting && !isFetching) {
      void (async () => {
        await fetchNextPage();
      })();
    }
  }, [intersecting, isFetching, fetchNextPage]);

  const handleClick = (id: number) => {
    // await fetchNextPage();
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
          const isActive = userId === user.id;

          return (
            <div
              key={user.id}
              onClick={() => {
                handleClick(user.id);
              }}
              className={clsx(
                "mx-2 cursor-pointer rounded-full bg-slate-500 px-4 py-2 text-white",
                isActive && "bg-black",
              )}
            >
              {user.name}
            </div>
          );
        })}
      </div>
      <div className="p-4">
        {data?.pages.map((page) => (
          <>
            {page.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </>
        ))}
      </div>
      {isFetching ? <div>LOADING</div> : null}
      <div ref={target} />
    </>
  );
};

export default PostsModule;
