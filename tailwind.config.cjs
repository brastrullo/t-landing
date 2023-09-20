/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '2200px',
        '6xl': '3600px',
				
      },
		}
	},

	plugins: []
};

module.exports = config;
