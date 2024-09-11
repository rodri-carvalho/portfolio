import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			"6xs": "375px",
			"5xs": "390px",
			"4xs": "414px",
			"3xs": "428px",
			"2xs": "768px",
			xs: "820px",
			sm: "1024px",
			md: "1400px",
			lg: "1920px",
			xl: "2048px",
			"2xl": "2560px",
			"3xl": "3840px",
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
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
			},
		],
		darkTheme: "dark", // Set the default dark theme
	},
};
