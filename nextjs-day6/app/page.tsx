import Link from "next/link";
import UserNavButtons from './components/UserNavButtons';

export default function Home() {
  return (
    <main style={{padding: 24, fontFamily: 'system-ui, sans-serif'}}>
      <h1>Next.js - Test loading and not-found</h1>
      <p>Use the links or the buttons below to test the route-level loading and not-found UI:</p>
      <ul>
        <li>
          <Link href="/users/1">/users/1</Link> — a normal user (fast)
        </li>
        <li>
          <Link href="/users/slow">/users/slow</Link> — simulates a slow fetch to show loading
        </li>
        <li>
          <Link href="/users/404">/users/404</Link> — triggers not-found
        </li>
      </ul>

      {/* client-side navigation buttons */}
      <UserNavButtons />
    </main>
  );
}
