const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/svhighlight/**/*.svelte'],
	theme:{
		extend:{
			spacing:{
				'xl': 'calc(var(--base-size) * 1.5)',
				'2xl': 'calc(var(--base-size) * 2)',
				'3xl': 'calc(var(--base-size) * 3)',
				'5xl': 'calc(var(--base-size) * 5)',
				'4': 'calc(var(--base-size) * 1)',
			},
			fontSize:{
				'xl': 'calc(var(--base-size)  * 1.5 )',
				'2xl': 'calc(var(--base-size) * 2)',
				'3xl': 'calc(var(--base-size) * 3)',
				'5xl': 'calc(var(--base-size) * 5)',
			},
		}
	},

	plugins: [daisyui]
};

module.exports = config;
