import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// TODO:
// GRID COLS 2 when sm
// Discord and Instagram icons

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
		<nav className="navbar mb-4 sm:mb-5 md:mb-6 lg:mb-7 shadow-lg bg-neutral text-neutral-content w-full">
			<div className="w-full ml-4 2xl:ml-8 3xl:ml-12 4xl:ml-16 flex mr-3 2xl:py-4 25xl:py-6">
				<div className="flex-none px-3">
					<Link
						to="/"
						className="text-2xl md:text-3xl lg:text-4xl 25xl:text-5xl 4xl:text-7xl font-bold align-middle">
						{title}
					</Link>
				</div>

				{windowWidth > 1000 ? (
					<div className=" flex-1 right-0 xl:mr-6 2xl:mr-10 3xl:mr-14 4xl:mr-20 pt-1 align-middle">
						<div className="flex justify-end items-center 25xl:gap-2 3xl:gap-5 4xl:gap-8">
							<Link
								to="/"
								className="btn-ghost btn-sm rounded-btn text-xl lg:text-2xl 2xl:text-3xl 25xl:text-4xl 4xl:text-6xl flex items-center">
								Início
							</Link>
							<Link
								to="/about"
								className="btn-ghost btn-sm rounded-btn text-xl lg:text-2xl 2xl:text-3xl 25xl:text-4xl 4xl:text-6xl flex items-center">
								Sobre
							</Link>
							<Link
								to="/knowledge"
								className="btn-ghost btn-sm rounded-btn text-xl lg:text-2xl 2xl:text-3xl 25xl:text-4xl 4xl:text-6xl flex items-center">
								Habilidades
							</Link>
							<Link
								to="/education"
								className="btn-ghost btn-sm rounded-btn text-xl lg:text-2xl 2xl:text-3xl 25xl:text-4xl 4xl:text-6xl flex items-center">
								Formação
							</Link>
							<Link
								to="/projects"
								className="btn-ghost btn-sm rounded-btn text-xl lg:text-2xl 2xl:text-3xl 25xl:text-4xl 4xl:text-6xl flex items-center">
								Projetos
							</Link>
							<Link
								to="/findme"
								className="btn-ghost btn-sm rounded-btn text-xl lg:text-2xl 2xl:text-3xl 25xl:text-4xl 4xl:text-6xl flex items-center">
								Contato
							</Link>
						</div>
					</div>
				) : (
					<div className="dropdown dropdown-end absolute right-8">
						<div tabIndex={0} role="button" onClick={toggleDropdown}>
							<IoMenu className="w-12 h-12" />
						</div>
						{isDropdownOpen && (
							<ul
								tabIndex={0}
								className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow gap-4">
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
