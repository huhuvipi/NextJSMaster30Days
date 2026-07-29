import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h2>User not found</h2>
      <p>The requested user does not exist.</p>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </main>
  );
}
