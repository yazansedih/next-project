import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import LoadingPostDetails from "./loading";

export default async function PostDetailsPage({ params }) {
  const postId = await params.postId;

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Post Details</h1>
      <Suspense fallback={<LoadingPostDetails />}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
