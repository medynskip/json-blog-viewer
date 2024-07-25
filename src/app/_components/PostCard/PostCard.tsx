import Image from "next/image";
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
      className="mb-4 flex w-full cursor-pointer overflow-hidden rounded-md border bg-white transition-all hover:shadow-lg"
    >
      <div className="h-48 min-w-72 overflow-hidden">
        <Image
          src={`https://picsum.photos/300/200?random=${post.id.toString()}`}
          alt={post.title}
          width="300"
          height="200"
          className="size-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{post.title.toUpperCase()}</h3>
      </div>
    </Link>
  );
};

export default PostCard;
