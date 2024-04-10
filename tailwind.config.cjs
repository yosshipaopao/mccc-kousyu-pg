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
				'2': 'calc(var(--base-size) )',
				'4': 'calc(var(--base-size) * 2)',
				'25': 'calc(var(--base-size) * 25)',
				'30': 'calc(var(--base-size) * 30)',
				'45': 'calc(var(--base-size) * 45)',
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
