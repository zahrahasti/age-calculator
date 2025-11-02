import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({

	server: {
		open: true,
		port: 3000,
		host: '127.0.0.1',
	},
	plugins: [
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@src': new URL('./src', import.meta.url).pathname,
		},
	},
});
