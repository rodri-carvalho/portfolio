import React from "react";
import PropTypes from "prop-types";

function ModalCourses({ modalId, buttonLabel, content, title, imageSrc }) {
	return (
		<>
			<button className="btn" onClick={() => document.getElementById(modalId).showModal()}>
				{buttonLabel}
			</button>
			<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg">{title}</h3>
					<p className="py-4">{content}</p>
					{imageSrc && <img src={imageSrc} alt={title} className="max-w-full h-auto" />}
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Fechar</button>
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
	content: PropTypes.string,
	title: PropTypes.string.isRequired,
	imageSrc: PropTypes.string,
};

export default ModalCourses;
