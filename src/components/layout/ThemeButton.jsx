import { useState, useEffect } from "react";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";

function ThemeToggleButton() {
	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem("theme");
		// Set dark as the default theme if none is set in localStorage
		return storedTheme ? storedTheme : "dark";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<button
			className="botaoIcone bg-secondary outline-hidden !m-0 !p-0 lg:!px-2 2xl:!px-3 lg:rounded-2xl 3xl:rounded-3xl theme-toggle-button 2xl:!min-h-20"
			onClick={toggleTheme}>
			{theme === "light" ? (
				<PiMoonStarsFill className="text-3xl 2xl:text-4xl" />
			) : (
				<IoSunny className="text-3xl 2xl:text-4xl" />
			)}
		</button>
	);
}

export default ThemeToggleButton;
