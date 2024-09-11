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
		<nav className="navbar shadow-lg text-neutral-content w-full bg-secondary 2xl:py-0">
			<div className="w-full 2xl:ml-8 3xl:ml-12 flex mr-3 2xl:py-0 3xl:py-4">
				<div className="flex-none px-3">
					<Link
						to="/"
						className="botaoIcone text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-bold align-middle text-base-100 p-2 rounded-xl">
						{title}
					</Link>
				</div>

				{windowWidth > 1100 ? (
					<div className="flex-1 right-0 xl:mr-6 2xl:mr-10 3xl:mr-14 pt-1">
						<div className="flex justify-end items-center 2xl:gap-1 3xl:gap-0 text-base-100">
							<Link
								to="/"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Início
							</Link>
							<Link
								to="/about"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Sobre
							</Link>
							<Link
								to="/knowledge"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Habilidades
							</Link>
							<Link
								to="/education"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Formação
							</Link>
							<Link
								to="/projects"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Projetos
							</Link>
							<Link
								to="/findme"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Contato
							</Link>
							<ThemeToggleButton />
						</div>
					</div>
				) : (
					<div className="dropdown dropdown-end absolute right-8">
						<div tabIndex={0} role="button" onClick={toggleDropdown}>
							<IoMenu className="text-5xl text-base-100" />
						</div>
						{isDropdownOpen && (
							<ul
								tabIndex={0}
								className="dropdown-content menu bg-text rounded-box z-50 w-52 p-2 shadow-2xl gap-0 bg-accent text-base-100">
								<li onClick={closeDropdown}>
									<Link to="/" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Início
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto"></div>
								<li onClick={closeDropdown}>
									<Link to="/about" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Sobre
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto"></div>
								<li onClick={closeDropdown}>
									<Link to="/knowledge" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Habilidades
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto"></div>
								<li onClick={closeDropdown}>
									<Link to="/education" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Formação
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto"></div>
								<li onClick={closeDropdown}>
									<Link to="/projects" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Projetos
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto"></div>
								<li onClick={closeDropdown}>
									<Link to="/findme" className="btn btn-ghost btn-sm rounded-btn text-xl">
										Contato
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto"></div>
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
