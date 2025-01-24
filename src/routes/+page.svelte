<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const currentUser = writable(null); // Store for current user
  const loading = writable(true);
  const error = writable(null);

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/session', {
        method: 'GET',
        credentials: 'include', // Include cookies in the request
      });

      if (!response.ok) {
        throw new Error('Failed to fetch current user');
      }

      const data = await response.json();
      currentUser.set(data.currentUser || null);
    } catch (err) {
      error.set('Error fetching current user');
    } finally {
      loading.set(false);
    }
  });
</script>

<main>
  <h1>Current User</h1>

  {#if $loading}
    <p>Loading...</p>
  {:else if $error}
    <p>{$error}</p>
  {:else if $currentUser}
    <pre>{JSON.stringify($currentUser, null, 2)}</pre>
  {:else}
    <p>No user is currently logged in.</p>
  {/if}
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }
</style>
