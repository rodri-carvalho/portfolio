import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			xxxs: "370px",
			xxs: "380px",
			xs: "395px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1336px",
			"25xl": "1750px",
			"3xl": "2000px",
			"35xl": "2500px",
			"4xl": "3000px",
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#A4A4A4",
					secondary: "#60748A",
					accent: "#434F5C",
					neutral: "#7E90A5",
					"base-100": "#e7e5e4",
					info: "#3B82F6",
					success: "#16A34A",
					warning: "#F59E0B",
					error: "#DC2626",
				},
				dark: {
					primary: "#404040",
					secondary: "#3F4C5C",
					accent: "#A6ADBB",
					neutral: "#232A33",
					"base-100": "#e5e7eb",
					info: "#00dfff",
					success: "#00e778",
					warning: "#ffae00",
					error: "#ffa2a1",
				},
			},
		],
	},
};
