import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { next: { revalidate: 120 } } // revalidate every 120 seconds
    //   { cache: "no-store" } // no-store to always fetch fresh data
  );
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link
        href={`/posts/${post.id}`}
        key={post.id}
        style={{ textDecoration: "none", width: "70%" }}
      >
        <div
          style={{
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            color: "black",
            margin: "10px 0",
          }}
          key={post.id}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Posts Page</h1>
      {/* POSTS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {postsJSX}
      </div>
    </div>
  );
}
