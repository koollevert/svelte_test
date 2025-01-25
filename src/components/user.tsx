import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const UserComponent = component$(() => {
  const currentUser = useSignal(null);
  const loading = useSignal(true);
  const error = useSignal<string | null>(null);

  useVisibleTask$(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('https://tikitika.dev/api/auth/session', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch current user');
        }

        const data = await response.json();
        currentUser.value = data.currentUser || null;
      } catch (err) {
        error.value = 'Error fetching current user';
      } finally {
        loading.value = false;
      }
    };

    fetchCurrentUser();
  });

  return (
    <main>
      <h1>Current User</h1>
      {loading.value && <p>Loading...</p>}
      {!loading.value && error.value && <p>{error.value}</p>}
      {!loading.value && currentUser.value && (
        <pre>{JSON.stringify(currentUser.value, null, 2)}</pre>
      )}
      {!loading.value && !currentUser.value && <p>No user is currently logged in.</p>}
    </main>
  );
});
