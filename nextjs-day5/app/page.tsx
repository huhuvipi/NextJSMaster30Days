import React, { Suspense } from "react";
import Image from "next/image";
import ClientPostList from "./components/ClientPostList";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 10}});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const list: Post[] = await res.json();
  // timestamp when this server-rendered HTML was generated
  const fetchedAt = new Date().toLocaleString();

  return (
    <main style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1>Server-rendered posts</h1>
      <p>Below is a server-side fetch of posts (first 10 items):</p>
       
      <ul>
        {list.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: 16 }}>
            <h2 style={{ margin: 0, fontSize: "1.05rem" }}>{post.title}</h2>
            <p style={{ margin: "4px 0 0", color: "#333" }}>{post.body}</p>
            <p style={{ marginTop: 12, fontSize: 12, color: '#666' }}>Fetched at: {fetchedAt} (server)</p>
          </li>
        ))}
      </ul>

      <hr style={{ margin: "24px 0" }} />

      <h1>Client-side posts</h1>
      <p>This component demonstrates client-side fetching and interactivity:</p>
      <Suspense fallback={<p>Loading client component…</p>}>
        <ClientPostList />
      </Suspense>

      <hr style={{ margin: "24px 0" }} />

      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
        priority
      />
      <p style={{ marginTop: 12, fontSize: 12, color: '#666' }}>Fetched at: {fetchedAt} (server)</p>
    </main>
  );
}
