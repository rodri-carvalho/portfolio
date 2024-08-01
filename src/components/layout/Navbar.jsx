import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// TODO:
// Menu || Navbar || Drawer > Navbar menu for desktop + sidebar drawer for mobile
// Join /\?
// Hamburger button
// Theme Controller using a swap
// FA Icons

function Navbar({ title = "Portfólio" }) {
	return (
		<nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content overflow-hidden">
			<div className="container mx-auto">
				<div className="flex-none px-2 mx-2">
					<Link to="/" className="text-3xl font-bold align-middle">
						{title}
					</Link>
				</div>

				<div className="flex-1 px-2 mx-2">
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
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;
