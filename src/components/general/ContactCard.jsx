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
		<div className="card bg-neutral shadow-xl w-11/12 lg:w-11/12 2xl:w-5/12 3xl:w-5/12 4xl:w-1/2 max-w-full px-1 overflow-hidden 2xl:place-self-center">
			<div className="flex justify-center items-center mt-2 xxs:mt-3 xs:mt-4 md:mt-5 xxs:mb-1">
				<h2 className="card-title botaoIcon text-lg xs:text-xl md:text-3xl lg:text-3xl 4xl:text-6xl 4xl:pt-1 pb-1 lg:pb-2">
					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 md:gap-3 lg:gap-4 text-base-100">
						<IconComponent className="w-6 h-6 xs:w-7 xs:h-7 md:w-9 md:h-9 3xl:w-10 3xl:h-10 4xl:w-20 4xl:h-20 " />
						<div className="">{title}</div>
					</a>
				</h2>
			</div>
			<div className="w-full max-w-full flex flex-col items-center justify-center">
				<div className="divider self-center w-9/12 pr-2 3xl:w-10/12 m-0 lg:mr-10"></div>
			</div>
			<div className="contactInfo flex items-center h-full justify-between gap-2 ml-4 max-w-full w-11/12 pb-2 xxs:pt-1 xxs:pb-3 xs:pt-3 xs:pb-6  2xl:pt-0 2xl:pb-2 3xl:5 3xl:pb-8 4xl:pt-7 4xl:pb-10">
				<div className="flex flex-col items-center justify-center w-full sm:pl-24 md:pl-6 lg:pl-16 2xl:pl-14 4xl:pl-40 text-base-100">
					<p
						id={`numberOrID-${title}`}
						ref={textRef}
						className="w-full text-center break-words pt-1 xxs:text-lg xs:text-xl md:text-2xl 3xl:text-4xl 4xl:text-6xl"
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
				<div className="rotate-90 max-w-full">
					<div className="divider w-12 4xl:w-20 hidden sm:flex"></div>
				</div>
				<div className="flex justify-end">
					<div className="card-actions justify-end pt-1 xxs:pt-2">
						<button
							className="btn botao w-8 h-8 md:w-11 md:h-11 lg:w-14 lg:h-14 4xl:h-20 4xl:w-20 min-h-0 p-0 bg-accent border-secondary"
							onClick={copyToClipboard}>
							<FaCopy className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 4xl:h-12 4xl:w-12 m-0 text-base-100" />
						</button>
					</div>
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
