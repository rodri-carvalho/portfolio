import { FaWhatsapp, FaLinkedin, FaCopy, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer footer-center bg-secondary text-base-content rounded pt-8 2xl:pt-10 3xl:pt-13 gap-3 md:gap-4 3xl:gap-8">
			<nav className="container mx-auto ">
				<div className="flex gap-7 sm:gap-8 md:gap-12 xl:gap-12 3xl:gap-24 pb-4">
					<a
						href="https://wa.me/5561999662404"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaWhatsapp className="text-lg 2xl:text-5xl" />
					</a>
					<a
						href="https://github.com/rodri-carvalho"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaGithub className="text-lg 2xl:text-5xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/rodrigo-carvalho-m/"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaLinkedin className="text-lg 2xl:text-5xl" />
					</a>
					<a
						href="https://discordapp.com/users/1067993447706931243"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaDiscord className="text-lg 2xl:text-5xl" />
					</a>
					<a
						href="https://www.instagram.com/rodrigomnd/"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaInstagram className="text-lg 2xl:text-5xl" />
					</a>
				</div>
			</nav>
			<div className="flex w-full items-center justify-center">
				<div className="divider m-0 w-4/6 sm:w-1/2 lg:w-2/5 2xl:w-1/4 flex items-center justify-center"></div>
			</div>
			<nav className="w-4/12 gap-x-28 grid grid-cols-3 sm:grid-cols-3 md:w-40 md:flex justify-center md:gap-2 lg:gap-3 2xl:gap-4 3xl:gap-5 text-center pb-2">
				<Link to="/" className="botao rounded-btn text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
					Início
				</Link>
				<Link to="/about" className="botao rounded-btn text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
					Sobre
				</Link>
				<Link
					to="/knowledge"
					className="botao rounded-btn text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
					Habilidades
				</Link>
				<Link
					to="/education"
					className="botao rounded-btn text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
					Formação
				</Link>
				<Link
					to="/projects"
					className="botao rounded-btn text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
					Projetos
				</Link>
				<Link
					to="/findme"
					className="botao rounded-btn text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
					Contato
				</Link>
			</nav>
			<div className="flex w-full items-center justify-center">
				<div className="divider m-0 w-4/6 sm:w-1/2 lg:w-2/5 2xl:w-1/4 flex items-center justify-center"></div>
			</div>
			<aside className="text-base-100 md:text-lg lg:text-xl 3xl:text-3x mb-8 2xl:mb-10 3xl:mb-12 px-2">
				<p className="text-center sm:text-left 3xl:pb-4">Rodrigo Carvalho • {footerYear}</p>
				<p>
					Código do projeto deste Portfólio diponível no{" "}
					<a
						href="https://github.com/rodri-carvalho/portfolio"
						target="_blank"
						className="text-base-100 botaoIcone">
						GitHub
					</a>
					.
				</p>
			</aside>
		</footer>
	);
}

export default Footer;
