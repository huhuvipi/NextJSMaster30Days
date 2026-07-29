import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

// Simulated data fetch with different behaviors depending on id
async function getUser(id: string) {
  if (id === '404') return null; // simulate not found
  if (id === 'slow') {
    // simulate a slow network call (3 seconds)
    await new Promise((r) => setTimeout(r, 3000));
    return { id, name: 'Slow User' };
  }
  // fast response
  return { id, name: `User ${id}` };
}

export default async function Page({ params: { id } }: Props) {
  const user = await getUser(id);

  if (!user) {
    // This will render route-level not-found (app/users/[id]/not-found.tsx if present)
    notFound();
  }

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h2>User detail</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
    </main>
  );
}
