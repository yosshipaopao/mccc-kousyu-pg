const daisyui = require('daisyui');
/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/svhighlight/**/*.svelte'],

	theme: {
		extend: {}
	},

	plugins: [daisyui]
};

module.exports = config;
