import Link from "next/link";

import type { Post } from "@/types/types";

interface PostCardProps {
  post: Post;
}

const PostCard = (props: PostCardProps) => {
  const { post } = props;
  return (
    <Link
      href={`/${post.id.toString()}`}
      className="aspect-square w-64 cursor-pointer rounded-md border bg-white p-4 transition-all hover:shadow-lg"
    >
      <h3 className="text-xl font-bold">{post.title.toUpperCase()}</h3>
    </Link>
  );
};

export default PostCard;
