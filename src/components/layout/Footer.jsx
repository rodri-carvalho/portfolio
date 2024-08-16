import { FaWhatsapp, FaLinkedin, FaCopy, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer footer-center bg-base-200 text-base-content rounded pt-8 gap-3">
			<nav className="container mx-auto ">
				<div className="flex gap-7 sm:gap-8 md:gap-12 pb-4">
					{/* <div className="flex gap-10 pb-7"> */}
					<a href="https://wa.me/5561999662404" target="_blank" rel="noopener noreferrer">
						<FaWhatsapp className="h-10 w-10" />
					</a>
					<a href="https://github.com/rodri-carvalho" target="_blank" rel="noopener noreferrer">
						<FaGithub className="h-10 w-10" />
					</a>
					<a
						href="https://www.linkedin.com/in/rodrigo-carvalho-m/"
						target="_blank"
						rel="noopener noreferrer">
						<FaLinkedin className="h-10 w-10" />
					</a>
					{/* </div> */}
					{/* <div className="flex justify-center gap-10"> */}
					<a
						href="https://discordapp.com/users/1067993447706931243"
						target="_blank"
						rel="noopener noreferrer">
						<FaDiscord className="h-10 w-10" />
					</a>
					<a href="https://www.instagram.com/rodrigomnd/" target="_blank" rel="noopener noreferrer">
						<FaInstagram className="h-10 w-10" />
					</a>
					{/* </div> */}
				</div>
			</nav>
			<div className="flex w-full items-center justify-center">
				<div className="divider m-0 w-4/6 sm:w-1/2 lg:w-2/5 flex items-center justify-center"></div>
			</div>
			<nav className="w-4/12 gap-x-28 grid grid-cols-3 sm:grid-cols-3 md:w-40 md:flex justify-center md:gap-2 text-center pb-2">
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
			<div className="flex w-full items-center justify-center">
				<div className="divider m-0 w-4/6 sm:w-1/2 lg:w-2/5 flex items-center justify-center"></div>
			</div>
			<aside className="text-base mb-8 px-2">
				<p className="text-center sm:text-left">Rodrigo Carvalho • {footerYear}</p>
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
