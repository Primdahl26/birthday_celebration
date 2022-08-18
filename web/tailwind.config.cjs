/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'dark',
			'night',
			'luxury',
			'dracula',
			'pastel',
			'black',
			'business',
			'retro',
			'aqua',
			'wireframe'
		]
	}
}
