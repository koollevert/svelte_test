import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3000, // Set the server port to 3000
		host: '0.0.0.0', // Allow access from outside the container
		allowedHosts: ['tikitika.dev'], // Allow access from the host machine
	  },
	
});
