import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: {
				tailwind,
				autoprefixer
			}
		}
	}),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		inlineStyleThreshold: 100000000,

		// For example, instead of '_app', use 'app_', 'internal', etc.
		appDir: 'app_',
		vite: {
			server: {
				fs: {
					allow: ['../.yarn']
				}
			}
		}
	}
};

export default config;
