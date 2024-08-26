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

	return (
		<>
			<button
				className={`btn w-full text-gray-300 text-base h-fit ${inactive ? "disabledBtn" : ""}`}
				onClick={!inactive ? openModal : null}
				aria-label={`Open modal for ${title}`}>
				{buttonLabel}
			</button>

			<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
				<div className="modal-box pt-4 !max-w-full md:w-4/5">
					{imageSrc ? (
						<img src={imageSrc} alt={`Certificado do curso ${title}`} />
					) : (
						<div className="xl:py-4 xl:px-2">
							{buttonLabel === "Descrição" ? (
								content.map((paragraph, index) => (
									<p
										key={index}
										className="text-justify mb-4 md:mb-6 4xl:mb-16 text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl md:leading-8 xl:leading-10 2xl:leading-normal 3xl:leading-relaxed 4xl:leading-relaxed">
										{paragraph}
										<br />
									</p>
								))
							) : (
								<ul className="list-disc list-outside space-y-1 pl-5">
									{content.map((item, index) => (
										<li key={index} className="text-justify">
											{item}
										</li>
									))}
								</ul>
							)}
						</div>
					)}
					<div className="modal-action w-full mt-0">
						<form method="dialog" className="w-full flex justify-center">
							<button className="btn p-1 w-1/6 text-base md:text-lg xl:text-xl 2xl:text-2xl 25xl:text-3xl 3xl:text-4xl 4xl:text-5xl 3xl:min-h-24">
								Fechar
							</button>
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
