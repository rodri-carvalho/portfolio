import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer footer-center bg-base-200 text-base-content rounded pt-10">
			<nav className="container mx-auto ">
				<div className="grid grid-flow-col gap-16">
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
			<nav className="w-4/12 gap-x-28 grid grid-cols-2 sm:grid-cols-3 md:w-40 md:flex md:justify-center md:gap-2 text-center">
				<Link to="/" className="btn btn-ghost btn-sm rounded-btn text-lg lg:text-xl">
					Início
				</Link>
				<Link to="/about" className="btn btn-ghost btn-sm rounded-btn text-lg lg:text-xl">
					Sobre
				</Link>
				<Link to="/knowledge" className="btn btn-ghost btn-sm rounded-btn text-lg lg:text-xl">
					Habilidades
				</Link>
				<Link to="/education" className="btn btn-ghost btn-sm rounded-btn text-lg lg:text-xl">
					Formação
				</Link>
				<Link to="/projects" className="btn btn-ghost btn-sm rounded-btn text-lg lg:text-xl">
					Projetos
				</Link>
				<Link to="/findme" className="btn btn-ghost btn-sm rounded-btn text-lg lg:text-xl">
					Contato
				</Link>
			</nav>
			<aside className="text-sm mb-8">
				<p className="text-center sm:text-left">Rodrigo Carvalho • {new Date().getFullYear()}</p>
				<p>
					Código do projeto deste Portfólio diponível no{" "}
					<a href="https://github.com/rodri-carvalho/portfolio" target="_blank">
						GitHub
					</a>
					.
				</p>
			</aside>
		</footer>
	);
}

export default Footer;
