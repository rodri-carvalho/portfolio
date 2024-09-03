import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ThemeToggleButton from "./ThemeButton";

function Navbar({ title = "Meu Portfólio" }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const closeDropdown = () => {
		setIsDropdownOpen(false);
	};

	return (
		<nav className="navbar shadow-lg text-neutral-content w-full bg-secondary">
			<div className="w-full ml-4 2xl:ml-8 3xl:ml-12 4xl:ml-16 flex mr-3 2xl:py-2 25xl:py-6">
				<div className="flex-none px-3">
					<Link
						to="/"
						className="botao text-2xl md:text-3xl lg:text-3xl 25xl:text-5xl 4xl:text-7xl font-bold align-middle text-base-100">
						{title}
					</Link>
				</div>

				{windowWidth > 1100 ? (
					<div className=" flex-1 right-0 xl:mr-6 2xl:mr-10 3xl:mr-14 4xl:mr-20 pt-1 align-middle">
						<div className="flex justify-end items-center 2xl:gap-2 3xl:gap-5 4xl:gap-8 text-base-100">
							<Link
								to="/"
								className="botao btn btn-ghost rounded-btn text-xl lg:text-2xl 25xl:text-4xl 4xl:text-6xl flex items-center p-2">
								Início
							</Link>
							<Link
								to="/about"
								className="botao btn btn-ghost rounded-btn text-xl lg:text-2xl 25xl:text-4xl 4xl:text-6xl flex items-center p-2">
								Sobre
							</Link>
							<Link
								to="/knowledge"
								className="botao btn btn-ghost rounded-btn text-xl lg:text-2xl 25xl:text-4xl 4xl:text-6xl flex items-center p-2">
								Habilidades
							</Link>
							<Link
								to="/education"
								className="botao btn btn-ghost rounded-btn text-xl lg:text-2xl 25xl:text-4xl 4xl:text-6xl flex items-center p-2">
								Formação
							</Link>
							<Link
								to="/projects"
								className="botao btn btn-ghost rounded-btn text-xl lg:text-2xl 25xl:text-4xl 4xl:text-6xl flex items-center p-2">
								Projetos
							</Link>
							<Link
								to="/findme"
								className="botao btn btn-ghost rounded-btn text-xl lg:text-2xl 25xl:text-4xl 4xl:text-6xl flex items-center p-2">
								Contato
							</Link>
							<ThemeToggleButton />
						</div>
					</div>
				) : (
					<div className="dropdown dropdown-end absolute right-8">
						<div tabIndex={0} role="button" onClick={toggleDropdown}>
							<IoMenu className="w-12 h-12 text-base-100" />
						</div>
						{isDropdownOpen && (
							<ul
								tabIndex={0}
								className="dropdown-content menu bg-text rounded-box z-50 w-52 p-2 shadow gap-4">
								<li onClick={closeDropdown}>
									<Link to="/" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Início
									</Link>
								</li>
								<li onClick={closeDropdown}>
									<Link to="/about" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Sobre
									</Link>
								</li>
								<li onClick={closeDropdown}>
									<Link to="/knowledge" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Habilidades
									</Link>
								</li>
								<li onClick={closeDropdown}>
									<Link to="/education" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Formação
									</Link>
								</li>
								<li onClick={closeDropdown}>
									<Link to="/projects" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Projetos
									</Link>
								</li>
								<li onClick={closeDropdown}>
									<Link to="/findme" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Contato
									</Link>
								</li>
								<li>
									<ThemeToggleButton />
								</li>
							</ul>
						)}
					</div>
				)}
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;
