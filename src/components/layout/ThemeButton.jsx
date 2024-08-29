import { useState, useEffect } from "react";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoSunny } from "react-icons/io5";

function ThemeToggleButton() {
    // Define o tema inicial com base na preferência de tema do sistema
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    });

    useEffect(() => {
        // Aplica o tema e o salva no localStorage para persistência
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <button className="btn-ghost lg:rounded-2xl 3xl:rounded-3xl" onClick={toggleTheme}>
            {theme === "light" ? (
                <PiMoonStarsFill className="lg:h-6 lg:w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 25xl:h-12 25xl:w-12 3xl:h-14 3xl:w-14 4xl:h-20 4xl:w-20" />
            ) : (
                <IoSunny className="lg:h-6 lg:w-6 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 25xl:h-12 25xl:w-12 3xl:h-14 3xl:w-14 4xl:h-20 4xl:w-20" />
            )}
        </button>
    );
}

export default ThemeToggleButton;
