import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			xxs: "380px",
			xs: "395px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"25xl": "2000px",
			"3xl": "2100px",
			"4xl": "3000px",
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#3B3B3B", // Azul Escuro
					secondary: "#404D5C", // Rosa
					accent: "#229799", // Verde
					neutral: "#424242", // Cinza
					"base-100": "#FFFFFF", // Branco
					info: "#3B82F6", // Azul Claro
					success: "#16A34A", // Verde Escuro
					warning: "#F59E0B", // Amarelo
					error: "#DC2626", // Vermelho
				},
				dark: {
					primary: "#242424",

					secondary: "#2A323C",

					accent: "#A6ADBB",

					neutral: "#232A33",

					"base-100": "#191E24",

					info: "#00dfff",

					success: "#00e778",

					warning: "#ffae00",

					error: "#ffa2a1",
				},
			},
		],
	},
};
