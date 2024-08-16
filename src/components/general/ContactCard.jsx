import React from "react";
import PropTypes from "prop-types";
import { FaWhatsapp, FaLinkedin, FaCopy, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const iconMap = {
	0: MdOutlineEmail,
	1: FaWhatsapp,
	2: FaGithub,
	3: FaLinkedin,
	4: FaInstagram,
};

function ContactCard({ title, numberOrId, iconId }) {
	const IconComponent = iconMap[iconId] || (() => <div>No Icon</div>);

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
		<div className="card bg-base-100 shadow-xl w-11/12 max-w-full p-4 overflow-hidden">
			<div className="flex justify-center items-center gap-3 mb-2">
				<IconComponent className="w-8 h-8" />
				<h2 className="card-title">{title}</h2>
			</div>
			<div className="divider w-full m-0"></div>
			<div className="contactInfo flex items-center h-full justify-center gap-2 mx-1 max-w-full">
				<div className="flex flex-col items-center">
					<p
						id={`numberOrID-${title}`}
						className="w-full text-center break-words"
						style={{ wordBreak: "break-word", whiteSpace: "normal" }}>
						{numberOrId}
					</p>
				</div>
				<div className="rotate-90 max-w-full">
					{/* TODO: ajustar width (que é height) */}
					<div className="divider w-10 "></div>
				</div>
				<div className="flex">
					<div className="card-actions justify-end">
						<button className="btn" onClick={copyToClipboard}>
							<FaCopy className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</div>

		// <div className="card bg-base-100 shadow-xl w-10/12 flex">
		// 	<div className="card-body flex flex-row items-center w-full p-4">
		// 		<div className="flex gap-6 items-center justify-center">
		// 			<IconComponent />
		// 			<h2 className="card-title">{title}</h2>
		// 		</div>
		// 		<div className="flex w-full flex-col">
		// 			<div className="divider rotate-90 w-10"></div>
		// 		</div>
		// 		<p id={`numberOrID-${title}`}>{numberOrId}</p>
		// 		<div className="card-actions justify-end">
		// 			<button className="btn" onClick={copyToClipboard}>
		// 				<FaCopy />
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>
	);
}

ContactCard.propTypes = {
	title: PropTypes.string.isRequired,
	numberOrId: PropTypes.string.isRequired,
	iconId: PropTypes.number.isRequired,
};

export default ContactCard;
