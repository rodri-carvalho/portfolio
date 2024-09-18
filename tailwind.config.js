import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				hoverYellow: "#e3e5c7",
			},
		},
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
					primary: "#676767",
					secondary: "#4b5663",
					accent: "#363b41",
					neutral: "#6f7474",
					"base-100": "#e2e2e2",
					info: "#005865",
					success: "#196f46",
					warning: "#b27900",
					error: "#b27170",
				},
				light: {
					primary: "#a5a5a5",
					secondary: "#60748A",
					accent: "#434F5C",
					neutral: "#7E90A5",
					"base-100": "#e7e5e4",
					info: "#2f69c6",
					success: "#236e3f",
					warning: "#F59E0B",
					error: "#e24e4e",
				},
			},
		],
		darkTheme: "dark", // Set the default dark theme
	},
};
