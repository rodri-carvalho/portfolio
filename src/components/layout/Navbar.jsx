import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
		<nav className="navbar mb-6 sm:mb-8 md:mb-10 lg:mb-11 xl:mb-14 shadow-lg bg-neutral text-neutral-content w-full">
			<div className="w-full ml-4 flex mr-3">
				<div className="flex-none px-3">
					<Link to="/" className="text-2xl sm:text-3xl font-bold align-middle">
						{title}
					</Link>
				</div>

				{windowWidth > 970 ? (
					<div className="flex-1 right-0 pt-1">
						<div className="flex justify-end">
							<Link to="/" className="btn btn-ghost btn-sm rounded-btn text-xl">
								Início
							</Link>
							<Link to="/about" className="btn btn-ghost btn-sm rounded-btn text-xl">
								Sobre
							</Link>
							<Link to="/knowledge" className="btn btn-ghost btn-sm rounded-btn text-xl">
								Habilidades
							</Link>
							<Link to="/education" className="btn btn-ghost btn-sm rounded-btn text-xl">
								Formação
							</Link>
							<Link to="/projects" className="btn btn-ghost btn-sm rounded-btn text-xl">
								Projetos
							</Link>
							<Link to="/findme" className="btn btn-ghost btn-sm rounded-btn text-xl">
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
