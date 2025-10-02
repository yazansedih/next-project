export default async function PostDetails({ postId }) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 120 } }
  );
  const post = await response.json();

  return (
    <div>
      <div
        style={{
          width: "70%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
          margin: "10px 0",
        }}
        key={post.id}
      >
        <h2>{post.title}</h2>
        <hr />

        <p>{post.body}</p>
        <h2>Post ID: {postId}</h2>
        <h2>{post.title}</h2>
      </div>
    </div>
  );
}
