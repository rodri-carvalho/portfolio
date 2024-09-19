import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaWhatsapp, FaLinkedin, FaCopy, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const iconMap = {
	0: MdOutlineEmail,
	1: FaLinkedin,
	2: FaWhatsapp,
	3: FaGithub,
	4: FaInstagram,
	5: FaDiscord,
};

function ContactCard({ title, numberOrId, iconId, href }) {
	const IconComponent = iconMap[iconId] || (() => <div>No Icon</div>);

	const [shouldBreak, setShouldBreak] = useState(false);
	const textRef = useRef(null);

	useEffect(() => {
		const checkScreenWidth = () => {
			const screenWidth = window.innerWidth;
			if (screenWidth <= 768) {
				setShouldBreak(true);
			} else {
				setShouldBreak(false);
			}
		};

		checkScreenWidth();

		window.addEventListener("resize", checkScreenWidth);
		return () => window.removeEventListener("resize", checkScreenWidth);
	}, []);

	const splitLink = (link) => {
		const parts = link.split("/");
		if (parts.length > 3) {
			const baseLink = parts.slice(0, 3).join("/");
			const remainingLink = parts.slice(3).join("/");
			return [baseLink, remainingLink];
		}
		return [link];
	};

	const [baseLink, remainingLink] = splitLink(numberOrId);

	const copyToClipboard = async () => {
		try {
			const textToCopy = document.getElementById(`numberOrID-${title}`).innerText;
			await navigator.clipboard.writeText(textToCopy);

			// Criar o container do alerta
			const toastContainer = document.createElement("div");
			toastContainer.className =
				"fixed inset-0 flex top-5 justify-center pointer-events-none max-h-fit";

			// Criar o alerta de sucesso
			const alertSuccess = document.createElement("div");
			alertSuccess.className =
				"alert alert-success bg-success text-white shadow-lg max-w-xs w-full p-4 rounded-lg flex items-center justify-center opacity-0 transform scale-90 transition-all duration-500";

			// Criar a mensagem do alerta
			const alertSuccessSpan = document.createElement("span");
			alertSuccessSpan.innerText = "Contato copiado com sucesso";
			alertSuccess.appendChild(alertSuccessSpan);

			// Adicionar o alerta ao container
			toastContainer.appendChild(alertSuccess);

			// Adicionar o container à página
			document.body.appendChild(toastContainer);

			// Usar setTimeout para aplicar a transição de aparecimento
			setTimeout(() => {
				alertSuccess.classList.add("opacity-100", "scale-100"); // Altera a opacidade e o scale para fazê-lo aparecer suavemente
				alertSuccess.classList.remove("opacity-0", "scale-90");
			}, 100); // Pequeno atraso para garantir que a transição funcione

			// Remover o alerta com uma transição suave após 3 segundos
			setTimeout(() => {
				alertSuccess.classList.add("opacity-0", "scale-90"); // Suavizar o desaparecimento
				alertSuccess.classList.remove("opacity-100", "scale-100");

				// Remover o container do DOM após a transição
				setTimeout(() => {
					document.body.removeChild(toastContainer);
				}, 500); // Tempo suficiente para completar a transição
			}, 3000);
		} catch (err) {
			console.error("Erro ao copiar: ", err);
		}
	};

	return (
		<div className="card bg-accent shadow-2xl w-10/12 2xs:w-9/12 sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-10/12 2xl:w-9/12 3xl:w-9/12 2xl:rounded-3xl 3xl:rounded-3xl max-w-full px-1 overflow-hidden">
			<div className="flex justify-center items-center mt-2 2xs:mt-5 xs:mb-1 2xs:mb-2 md:mt-3 lg:mt-6 lg:mb-4 xl:mb-5 xl:mt-8 3xl:mb-10 3xl:mt-14 py-1 3xs:py-2 lg:py-1">
				<h2 className="card-title botaoIcon">
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone flex items-center gap-2 2xs:gap-4 sm:gap-5 3xl:gap-7 text-base-100">
						<IconComponent className="text-3xl 3xs:text-4xl 2xs:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 3xl:text-8xl" />
						<div className="text-xl 3xs:text-2xl 2xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl">
							{title}
						</div>
					</a>
				</h2>
				<div className="absolute right-3 3xs:right-4 2xs:right-5 xs:right-6 lg:right-8">
					<div className="card-actions">
						<button className="botao !p-0" onClick={copyToClipboard}>
							<FaCopy className="text-lg 6xs:text-xl 3xs:text-2xl 2xs:text-3xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-6xl" />
						</button>
					</div>
				</div>
			</div>
			<div className="w-full max-w-full flex flex-col items-center justify-center">
				<div className="divider self-center w-10/12 xs:w-9/12 3xl:w-10/12 m-0 lg:mr-10"></div>
			</div>
			<div className="contactInfo flex items-center h-full pb-3 3xs:pb-5 3xs:pt-2 2xs:pb-7 2xs:pt-4 md:pb-4 md:pt-1 lg:pt-4 lg:pb-8 xl:pt-6 xl:pb-10 3xl:pt-12 3xl:pb-16">
				<div className="flex flex-col items-center justify-center w-full text-base-100">
					<p
						id={`numberOrID-${title}`}
						ref={textRef}
						className="w-full text-center break-words text-xl 3xs:text-2xl 2xs:text-3xl lg:text-4xl xl:text-5xl 3xl:text-7xl py-1 no-underline"
						style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
						{shouldBreak && remainingLink ? (
							<>
								{baseLink}/<br />
								{remainingLink}
							</>
						) : (
							numberOrId
						)}
					</p>
				</div>
			</div>
		</div>
	);
}

ContactCard.propTypes = {
	title: PropTypes.string.isRequired,
	numberOrId: PropTypes.string.isRequired,
	iconId: PropTypes.number.isRequired,
	href: PropTypes.string.isRequired,
};

export default ContactCard;
