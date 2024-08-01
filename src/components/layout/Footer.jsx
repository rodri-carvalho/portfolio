import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
			<nav className="container mx-auto">
				<div className="grid grid-flow-col gap-16 mb-4 sm:mb-0 sm:justify-center">
					<a href="https://github.com/rodri-carvalho" target="_blank" rel="noopener noreferrer">
						<FaGithub className="h-10 w-10" />
					</a>
					<a
						href="https://www.linkedin.com/in/rodrigo-carvalho-m/"
						target="_blank"
						rel="noopener noreferrer">
						<FaLinkedin className="h-10 w-10" />
					</a>
				</div>
			</nav>
			<nav className="container mx-auto grid gap-4 text-center md:grid-flow-col">
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
			</nav>
			<aside>
				<p className="text-center sm:text-left">Rodrigo Carvalho • {new Date().getFullYear()}</p>
				{/* TODO: LINK */}
				TODO:
				<p>
					Código do projeto deste Portfólio diponível no{" "}
					<a href="https://google.com" target="_blank">
						Github
					</a>
					.
				</p>
			</aside>
		</footer>
	);
}

export default Footer;
