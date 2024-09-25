import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
	const footerDate = new Date().toLocaleDateString("pt-BR", {
		month: "long",
		year: "numeric",
	});

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const [month, year] = footerDate.split(" de ");
	const formattedFooterDate = `${capitalizeFirstLetter(month)} / ${year}`;

	return (
		<footer className="footer footer-center bg-secondary text-base-content pt-8 2xl:pt-10 3xl:pt-12 gap-3 mt-3">
			<nav className="container mx-auto">
				<div className="flex gap-6 4xs:gap-7 2xs:gap-7 sm:gap-8 md:gap-10 2xl:gap-14 3xl:gap-16 pb-1 lg:mb-2">
					<a
						href="https://wa.me/5561999662404"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaWhatsapp className="text-3xl 4xs:text-4xl 2xs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl" />
					</a>
					<a
						href="mailto:rodricarvalhom@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<MdOutlineEmail className="text-3xl 4xs:text-4xl 2xs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/rodrigo-carvalho-m/"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaLinkedin className="text-3xl 4xs:text-4xl 2xs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl" />
					</a>
					<a
						href="https://github.com/rodri-carvalho"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaGithub className="text-3xl 4xs:text-4xl 2xs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl" />
					</a>
					<a
						href="https://discordapp.com/users/1067993447706931243"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaDiscord className="text-3xl 4xs:text-4xl 2xs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl" />
					</a>
					<a
						href="https://www.instagram.com/rodrigomnd/"
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone p-0">
						<FaInstagram className="text-3xl 4xs:text-4xl 2xs:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl" />
					</a>
				</div>
			</nav>
			<div className="flex items-center justify-center w-full">
				<div className="divider flex items-center justify-center m-0 w-4/6 sm:w-1/2 lg:w-2/5 2xl:w-1/4"></div>
			</div>
			<nav className="grid grid-cols-3 2xs:flex justify-start pb-1 md:!py-2 3xl:!py-5 ml-1 mr-3 6xs:mr-4 5xs:mr-5 4xs:mr-6 2xs:ml-1 2xs:mr-1 2xs:gap-4 xs:gap-5 xm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10 3xl:gap-12">
				<Link
					to="/"
					className="botao rounded-btn text-lg 4xs:text-xl 2xs:text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
					Início
				</Link>
				<Link
					to="/education"
					className="botao rounded-btn text-lg 4xs:text-xl 2xs:text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
					Formação
				</Link>
				<Link
					to="/projects"
					className="botao rounded-btn text-lg 4xs:text-xl 2xs:text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
					Projetos
				</Link>
				<Link
					to="/about"
					className="botao rounded-btn text-lg 4xs:text-xl 2xs:text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
					Sobre
				</Link>
				<Link
					to="/knowledge"
					className="botao rounded-btn text-lg 4xs:text-xl 2xs:text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
					Habilidades
				</Link>
				<Link
					to="/findme"
					className="botao rounded-btn text-lg 4xs:text-xl 2xs:text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
					Contato
				</Link>
			</nav>
			<div className="flex items-center justify-center w-full">
				<div className="divider flex items-center justify-center m-0 w-4/6 sm:w-1/2 lg:w-2/5 2xl:w-1/4"></div>
			</div>
			<aside className="text-base-100 text-sm 4xs:text-base 2xs:text-base sm:text-lg 2xl:text-2xl 3xl:text-4xl mb-4 md:mb-5 2xl:mb-7 3xl:mb-12 3xl:mt-5 px-2 gap-0 2xl:gap-2 3xl:gap-5">
				<p className="text-center pb-1">Rodrigo Carvalho • {formattedFooterDate}</p>
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
