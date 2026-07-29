"use client";

import React, { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function ClientPostList() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: Post[]) => {
        if (mounted) setPosts(data.slice(0, 5));
      })
      .catch((err) => {
        if (mounted) setError(err.message);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p>Loading client posts…</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!posts || posts.length === 0) return <p>No posts found</p>;

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id} style={{ marginBottom: 12 }}>
          <strong style={{ display: "block" }}>{p.title}</strong>
          <span>{p.body}</span>
        </li>
      ))}
    </ul>
  );
}
