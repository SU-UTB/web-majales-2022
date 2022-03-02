import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';

const production = !process.env.ROLLUP_WATCH;
const pages = ['home', 'bandContest', 'lineup', 'majalesKing', 'newsFeed', 'contact', 'partners'];

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

const multiSPA = page => {
	if (page === 'home') {
		return {
			input: 'src/pages/home/home.js',
			output: {
				sourcemap: true,
				format: 'iife',
				name: 'app',
				file: 'public/build/home.js'
			},
			plugins: [
				svelte({
					preprocess: sveltePreprocess(),
					compilerOptions: {
						dev: !production
					}
				}),
				css({ output: 'home.css' }),
				resolve({
					browser: true,
					dedupe: ['svelte']
				}),
				commonjs(),
				!production && serve(),
				!production && livereload('public'),
				production && terser()
			],
			watch: {
				clearScreen: false
			}
		}
	}

	return {
		input: `src/pages/${page}/${page}.js`,
		output: {
			sourcemap: false,
			format: 'iife',
			name: 'app',
			file: `public/build/${page}.js`
		},
		plugins: [
			svelte({
				preprocess: sveltePreprocess(),
				compilerOptions: {
					dev: !production
				}
			}),
			css({ output: `${page}.css` }),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),
			production && terser()
		]
	}
}

const exp = () => {
	let expPages = [];
	pages.forEach(page => expPages.push(multiSPA(page)));
	return expPages;
}

exp();

export default exp;