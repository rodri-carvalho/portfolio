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
		<nav className="navbar shadow-lg text-neutral-content w-full bg-secondary 4xs:py-5 2xs:py-5 lg:py-7 xl:py-8 2xl:py-9 3xl:py-12 mb-3">
			<div className="w-full ">
				<div className="flex-none px-1 2xs:ml-4 lg:ml-7">
					<Link
						to="/"
						className="botaoIcone text-2xl 3xs:text-3xl md:text-3xl lg:text-4xl 2xl:text-6xl 3xl:text-7xl font-bold align-middle text-base-100 p-2 rounded-xl">
						{title}
					</Link>
				</div>

				{windowWidth > 1399 ? (
					<div className="flex-1 right-0 mr-9 lg:mr-12 2xl:mr-16">
						<div className="flex justify-end items-center md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 3xl:gap-5 text-base-100">
							<Link
								to="/"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn md:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Início
							</Link>
							<Link
								to="/about"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn md:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Sobre
							</Link>
							<Link
								to="/knowledge"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn md:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Habilidades
							</Link>
							<Link
								to="/education"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn md:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Formação
							</Link>
							<Link
								to="/projects"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn md:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Projetos
							</Link>
							<Link
								to="/findme"
								className="botao bg-accent !py-0 3xl:!px-3 rounded-btn md:text-2xl lg:text-3xl 2xl:text-5xl 3xl:text-6xl flex items-center 2xl:!min-h-14 3xl:!min-h-16 2xl:rounded-2xl 3xl:rounded-3xl">
								Contato
							</Link>
							<ThemeToggleButton />
						</div>
					</div>
				) : (
					<div className="dropdown dropdown-end absolute right-6">
						<div tabIndex={0} role="button" onClick={toggleDropdown}>
							<IoMenu className="text-5xl xs:text-6xl text-base-100" />
						</div>
						{isDropdownOpen && (
							<ul
								tabIndex={0}
								className="dropdown-content place-content-center menu bg-text rounded-box z-50 w-52 p-2 shadow-2xl gap-0 bg-accent text-base-100">
								<li onClick={closeDropdown}>
									<Link
										to="/"
										className="botaoIcone text-xl 3xs:text-2xl my-0 5xs:mt-2 self-center">
										Início
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto 5xs:my-1"></div>
								<li onClick={closeDropdown}>
									<Link to="/about" className="botaoIcone text-xl 3xs:text-2xl my-0 self-center">
										Sobre
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto 5xs:my-1"></div>
								<li onClick={closeDropdown}>
									<Link
										to="/knowledge"
										className="botaoIcone text-xl 3xs:text-2xl my-0 self-center">
										Habilidades
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto 5xs:my-1"></div>
								<li onClick={closeDropdown}>
									<Link
										to="/education"
										className="botaoIcone text-xl 3xs:text-2xl my-0 self-center">
										Formação
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto 5xs:my-1"></div>
								<li onClick={closeDropdown}>
									<Link to="/projects" className="botaoIcone text-xl 3xs:text-2xl my-0 self-center">
										Projetos
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto 5xs:my-1"></div>
								<li onClick={closeDropdown}>
									<Link to="/findme" className="botaoIcone text-xl 3xs:text-2xl my-0 self-center">
										Contato
									</Link>
								</li>
								<div className="divider m-0 w-10/12 mx-auto 5xs:my-1"></div>
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
