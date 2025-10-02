export default function ShowArticlePage(props) {
  return (
    <div>
      <h1>Show Article</h1>
      <p style={{ fontSize: "2rem" }}>Title: {props.params.title}</p>
    </div>
  );
}
