import { FaWhatsapp, FaLinkedin, FaCopy, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
	const footerYear = new Date().getFullYear();

	return (
		<footer className="footer footer-center bg-base-200 text-base-content rounded pt-8 2xl:pt-10 25xl:pt-12 3xl:pt-13 4xl:pt-16 gap-3 md:gap-4 3xl:gap-8 4xl:gap-12">
			<nav className="container mx-auto ">
				<div className="flex gap-7 sm:gap-8 md:gap-12 xl:gap-12 3xl:gap-24 4xl:gap-28 pb-4">
					<a href="https://wa.me/5561999662404" target="_blank" rel="noopener noreferrer">
						<FaWhatsapp className="text-lg 2xl:text-5xl 4xl:text-9xl" />
					</a>
					<a href="https://github.com/rodri-carvalho" target="_blank" rel="noopener noreferrer">
						<FaGithub className="text-lg 2xl:text-5xl 4xl:text-9xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/rodrigo-carvalho-m/"
						target="_blank"
						rel="noopener noreferrer">
						<FaLinkedin className="text-lg 2xl:text-5xl 4xl:text-9xl" />
					</a>
					<a
						href="https://discordapp.com/users/1067993447706931243"
						target="_blank"
						rel="noopener noreferrer">
						<FaDiscord className="text-lg 2xl:text-5xl 4xl:text-9xl" />
					</a>
					<a href="https://www.instagram.com/rodrigomnd/" target="_blank" rel="noopener noreferrer">
						<FaInstagram className="text-lg 2xl:text-5xl 4xl:text-9xl" />
					</a>
				</div>
			</nav>
			<div className="flex w-full items-center justify-center">
				<div className="divider m-0 w-4/6 sm:w-1/2 lg:w-2/5 2xl:w-1/4 flex items-center justify-center"></div>
			</div>
			<nav className="w-4/12 gap-x-28 grid grid-cols-3 sm:grid-cols-3 md:w-40 md:flex justify-center md:gap-2 lg:gap-3 2xl:gap-4 3xl:gap-5 4xl:gap-10 text-center pb-2">
				<Link
					to="/"
					className="btn btn-ghost btn-sm rounded-btn text-lg md:text-xl lg:text-2xl 25xl:text-4xl 4xl:text-5xl">
					Início
				</Link>
				<Link
					to="/about"
					className="btn btn-ghost btn-sm rounded-btn text-lg md:text-xl lg:text-2xl 25xl:text-4xl 4xl:text-5xl">
					Sobre
				</Link>
				<Link
					to="/knowledge"
					className="btn btn-ghost btn-sm rounded-btn text-lg md:text-xl lg:text-2xl 25xl:text-4xl 4xl:text-5xl">
					Habilidades
				</Link>
				<Link
					to="/education"
					className="btn btn-ghost btn-sm rounded-btn text-lg md:text-xl lg:text-2xl 25xl:text-4xl 4xl:text-5xl">
					Formação
				</Link>
				<Link
					to="/projects"
					className="btn btn-ghost btn-sm rounded-btn text-lg md:text-xl lg:text-2xl 25xl:text-4xl 4xl:text-5xl">
					Projetos
				</Link>
				<Link
					to="/findme"
					className="btn btn-ghost btn-sm rounded-btn text-lg md:text-xl lg:text-2xl 25xl:text-4xl 4xl:text-5xl">
					Contato
				</Link>
			</nav>
			<div className="flex w-full items-center justify-center">
				<div className="divider m-0 w-4/6 sm:w-1/2 lg:w-2/5 2xl:w-1/4 flex items-center justify-center"></div>
			</div>
			<aside className="text-base md:text-lg lg:text-xl 3xl:text-3x 4xl:text-4xl mb-8 2xl:mb-10 3xl:mb-12 4xl:mb-20 px-2">
				<p className="text-center sm:text-left 3xl:pb-4 4xl:pb-6">
					Rodrigo Carvalho • {footerYear}
				</p>
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
