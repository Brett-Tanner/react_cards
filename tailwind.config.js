/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			aspectRatio: {
				card: "9 / 16",
			},
		},
	},
	plugins: [],
};
