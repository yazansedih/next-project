import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
import LoadingPostDetails from "./loading";

export default async function PostDetailsPage({ params }) {
  const postId = await params.postId;

  const loadingJsx = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "20px 0px",
        gap: "8px",
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "white",
            animation: `bounce 0.6s ${i * 0.2}s infinite alternate`,
          }}
        ></div>
      ))}

      <style>
        {`
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-15px); }
        }
      `}
      </style>
    </div>
  );

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Post Details</h1>
      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
