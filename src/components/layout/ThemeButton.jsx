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
			className="botaoIcone place-self-center outline-hidden mx-0 mt-2 mb-1 md:mt-0 md:mb-0 !p-0 lg:!pt-1"
			onClick={toggleTheme}>
			{theme === "light" ? (
				<PiMoonStarsFill className="text-3xl 5xs:text-4xl md:text-3xl 2xl:text-6xl 3xl:text-7xl 5xs:mb-2 md:mb-0" />
			) : (
				<IoSunny className="text-3xl 5xs:text-4xl md:text-3xl 2xl:text-6xl 3xl:text-7xl 5xs:mb-2 md:mb-0" />
			)}
		</button>
	);
}

export default ThemeToggleButton;
