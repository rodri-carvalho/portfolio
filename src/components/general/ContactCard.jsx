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

			const toastContainer = document.createElement("div");
			toastContainer.className = "toast toast-top toast-center";

			const alertSuccess = document.createElement("div");
			alertSuccess.className = "alert alert-success";
			const alertSuccessSpan = document.createElement("span");
			alertSuccessSpan.innerText = "Contato copiado com sucesso";
			alertSuccess.appendChild(alertSuccessSpan);

			toastContainer.appendChild(alertSuccess);

			document.body.appendChild(toastContainer);

			setTimeout(() => {
				document.body.removeChild(toastContainer);
			}, 3000);
		} catch (err) {
			console.error("Erro ao copiar: ", err);
		}
	};

	return (
		<div className="card bg-accent shadow-2xl w-10/12 2xs:w-9/12 xs:w-8/12 sm:w-7/12 md:w-full max-w-full px-1 overflow-hidden">
			<div className="flex justify-center items-center mt-2 2xs:mt-5 2xs:mb-2 md:mt-6 lg:mt-10 lg:mb-5 xs:mb-1">
				<h2 className="card-title botaoIcon">
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="botaoIcone flex items-center gap-2 2xs:gap-3 sm:gap-4 text-base-100">
						<IconComponent className="text-3xl 3xs:text-4xl 2xs:text-5xl md:text-3xl lg:text-5xl" />
						<div className="text-xl 3xs:text-2xl 2xs:text-2xl sm:text-3xl lg:text-4xl">{title}</div>
					</a>
				</h2>
				<div className="absolute right-3 3xs:right-4 2xs:right-5 xs:right-6 lg:right-8">
					<div className="card-actions">
						<button className="botao !p-0" onClick={copyToClipboard}>
							<FaCopy className="text-lg 6xs:text-xl 3xs:text-2xl 2xs:text-3xl md:text-xl lg:text-3xl" />
						</button>
					</div>
				</div>
			</div>
			<div className="w-full max-w-full flex flex-col items-center justify-center">
				<div className="divider self-center w-10/12 xs:w-9/12 3xl:w-10/12 m-0 lg:mr-10"></div>
			</div>
			<div className="contactInfo flex items-center h-full pb-3 3xs:pb-5 3xs:pt-2 2xs:pb-7 2xs:pt-4 md:pb-6 md:pt-3 lg:pt-6 lg:pb-10">
				<div className="flex flex-col items-center justify-center w-full text-base-100">
					<p
						id={`numberOrID-${title}`}
						ref={textRef}
						className="w-full text-center break-words text-xl 3xs:text-2xl 2xs:text-3xl md:text-2xl lg:text-4xl"
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
