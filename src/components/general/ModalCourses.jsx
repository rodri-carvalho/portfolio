import React from "react";
import PropTypes from "prop-types";

function ModalCourses({
	modalId,
	buttonLabel,
	content = "",
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

	return (
		<>
			<button
				className={`btn w-full text-gray-300 ${inactive ? "disabledBtn" : ""}`}
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
							{Array.isArray(content) ? (
								content.map((paragraph, index) => (
									<p key={index} className="text-justify">
										{paragraph}
										<br />
										<br />
									</p>
								))
							) : (
								<p>{content}</p>
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
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
	title: PropTypes.string.isRequired,
	imageSrc: PropTypes.string,
	inactive: PropTypes.bool,
};

export default ModalCourses;
