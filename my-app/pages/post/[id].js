/**
 * This is a Next.js page component that displays a single post based on the ID passed in the URL query
 * parameter.
 * @returns The component is returning a PostCard component with the post data that matches the postId
 * extracted from the router query. If no post is found with that id, it returns a "Post not found"
 * message.
 */
import { useRouter } from "next/router";
import postsData from "./posts.json";
import PostCard from "./PostCard";

export default function PostPage() {
  /* LEARING NOTE
  In the `Blog` component we are calling the post with href={`/post/${post.id}`}, and here
  the code is extracting the postId (so the `${post.id}`) from the URL query parameter 
  using the useRouter hook. It then searches for a post in the postsData array that matches
  the extracted postId using the find method. 
  */
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
