"use client";
import { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      { next: { revalidate: 120 } } // revalidate every 120 seconds
      //   { cache: "no-store" } // no-store to always fetch fresh data
    );

    const result = await response.json();
    setTodo(result);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo Item</h1>
      <p>{todo.title}</p>
    </div>
  );
}
