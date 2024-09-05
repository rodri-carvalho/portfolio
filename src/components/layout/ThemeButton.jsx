import { useState, useEffect } from "react";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";

function ThemeToggleButton() {
	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem("theme");
		return storedTheme ? storedTheme : "light";
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
			className="botao btn btn-ghost outline-hidden !m-0 !p-0 lg:!px-2 25xl:!px-3 lg:rounded-2xl 3xl:rounded-3xl theme-toggle-button 25xl:!min-h-20 4xl:translate-y-1"
			onClick={toggleTheme}>
			{theme === "light" ? (
				<PiMoonStarsFill className="text-3xl 25xl:text-4xl 4xl:text-6xl" />
			) : (
				<IoSunny className="text-3xl 25xl:text-4xl 4xl:text-6xl" />
			)}
		</button>
	);
}

export default ThemeToggleButton;
