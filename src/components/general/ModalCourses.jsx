import React from "react";
import PropTypes from "prop-types";

function ModalCourses({
	modalId,
	buttonLabel,
	content = [],
	title,
	imageSrc = null,
	inactive = false,
}) {
	const openModal = () => {
		const modal = document.getElementById(modalId);
		if (modal) {
			modal.showModal();
			modal.scrollTop = 0; // Ensure the scroll is at the top
		}
	};

	// Determine if the content is for description or learned
	const isDescription =
		Array.isArray(content) &&
		content.length > 0 &&
		typeof content[0] === "string" &&
		!content.some((item) => typeof item !== "string");

	return (
		<>
			<button
				className={`btn w-full text-gray-300 text-base h-fit ${inactive ? "disabledBtn" : ""}`}
				onClick={!inactive ? openModal : null}
				aria-label={`Open modal for ${title}`}>
				{buttonLabel}
			</button>

			<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
				<div className="modal-box pt-4 lg:max-w-fit">
					{imageSrc ? (
						<img src={imageSrc} alt={`Certificado do curso ${title}`} />
					) : (
						<div>
							{isDescription ? (
								content.map((paragraph, index) => (
									<p key={index} className="text-justify mb-2">
										{paragraph}
										<br />
									</p>
								))
							) : (
								// TODO: bullets na lista
								<ul className="flex justify-center space-y-1">
									{content.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							)}
						</div>
					)}
					<div className="modal-action w-full mt-4">
						<form method="dialog" className="w-full flex justify-center">
							<button className="btn p-1 w-2/6 text-base">Fechar</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}

ModalCourses.propTypes = {
	modalId: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
	title: PropTypes.string.isRequired,
	imageSrc: PropTypes.string,
	inactive: PropTypes.bool,
};

export default ModalCourses;
