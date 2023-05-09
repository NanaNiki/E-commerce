import { useRouter } from "next/router";
import postsData from "./posts.json";
import PostCard from "./PostCard";

export default function PostPage() {
  const router = useRouter();
  const postId = parseInt(router.query.id);
  const post = postsData.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <PostCard postsData={post} />
    </>
  );
}
