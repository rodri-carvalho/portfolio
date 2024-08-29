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
				className={`btn w-full text-gray-300 text-base h-fit 2xl:text-xl 3xl:text-2xl 4xl:text-3xl ${
					inactive ? "disabledBtn" : ""
				}`}
				onClick={!inactive ? openModal : null}
				aria-label={`Open modal for ${title}`}>
				{buttonLabel}
			</button>

			<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
				<div className="modal-box pt-4 sm:!max-w-fit md:w-4/5">
					{imageSrc ? (
						<img src={imageSrc} alt={`Certificado do curso ${title}`} />
					) : (
						<div className="xl:py-4 xl:px-2">
							{buttonLabel === "Descrição" ? (
								content.map((paragraph, index) => (
									<p
										key={index}
										className="text-justify mb-4 md:mb-6 4xl:mb-16 text-lg md:text-xl lg:text-2xl 2xl:text-3xl 25xl:text-4xl 4xl:text-5xl md:leading-8 xl:leading-10 2xl:leading-normal 3xl:leading-relaxed 4xl:leading-relaxed">
										{paragraph}
										<br />
									</p>
								))
							) : (
								<div className="sm:flex sm:justify-center pl-12 pr-6">
									<ul className="list-disc list-outside space-y-1 text-lg md:text-xl lg:text-2xl 2xl:text-3xl 25xl:text-4xl 4xl:text-5xl">
										{content.map((item, index) => (
											<li
												key={index}
												className="text-left pl-2 pb-1 sm:pb-2 25xl:pb-4 3xl:pb-5 4xl:pb-8">
												{item}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					)}
					<div className="modal-action w-full mt-0">
						<form method="dialog" className="w-full flex justify-center">
							<button className="btn flex justify-center items-center py-0 px-4 mt-3 md:mt-4 2xl:mt-0 text-lg lg:text-xl 2xl:text-3xl 25xl:text-4xl 4xl:text-5xl min-h-10 2xl:min-h-16 25xl:min-h-18 25xl:px-10 3xl:min-h-20 3xl:px-12 4xl:min-h-28 4xl:px-14">
								<div className="">Fechar</div>
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
	content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
	title: PropTypes.string.isRequired,
	imageSrc: PropTypes.string,
	inactive: PropTypes.bool,
};

export default ModalCourses;
