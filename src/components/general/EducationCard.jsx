import React from "react";
import PropTypes from "prop-types";

function EducationCard({ institution, title, pic, certificate, index, content = "" }) {
	const modalId = `modal-${index}`;

	// Função para fechar o modal ao clicar fora dele
	const handleOutsideClick = (e) => {
		const modal = document.getElementById(modalId);
		if (e.target === modal) {
			modal.close();
		}
	};

	return (
		<>
			<div className="card image-full w-fit 2xl:w-full lg:96 md:h-auto shadow-xl flex flex-col justify-between 3xl:mx-10">
				<figure className="w-full">
					<img src={pic} alt={`logo ${institution}`} className="w-full" />
				</figure>
				<div className="card-body py-6 px-4 flex flex-col !w-full !text-base-100">
					<h2 className="card-title flex flex-col items-start gap-1 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl">
						{Array.isArray(content) ? (
							content.map((content, index) => (
								<p key={index} className="text-justify">
									{content}
									<br />
								</p>
							))
						) : (
							<p>{content}</p>
						)}
					</h2>
					<div className="md:pt-4 3xl:pt-10">
						<p className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl grow-0">
							{title}
						</p>
					</div>
					<div className="card-actions justify-end h-full mr-4 3xl:h-full 3xl:flex 3xl:items-end">
						<button
							className="btn botao h-fit flex self-end w-fit px-5 py-2 mt-5 bottom-5 text-base sm:text-2xl 2xl:text-3xl 3xl:text-4xl sm:mr-6 sm:mb-6 md:mr-0 md:mb-0 lg:p-4 2xl:mr-10 3xl:mr-16 3xl:mb-10 2xl:p-3 3xl:p-7 2xl:rounded-2xl !text-base-100 bg-accent outline-hidden border-0"
							onClick={() => document.getElementById(modalId).showModal()}>
							Diploma
						</button>

						<dialog
							id={modalId}
							className="modal max-w-full w-full modal-bottom sm:modal-middle md:flex md:justify-center"
							onClick={handleOutsideClick}>
							<div className="modal-box !bg-neutral 2xl:rounded-3xl md:!max-w-full md:w-10/12 2xl:w-7/12 md:h-fit">
								<img
									src={certificate}
									alt={`Diploma do curso de ${title}`}
									className="h-full 2xl:p-6 3xl:p-8"
								/>
								<div className="modal-action justify-center 2xl:mt-0">
									<form method="dialog" className=" w-full flex justify-center">
										<button className="btn botao btn-ghost 2xl:rounded-xl !p-0 !min-w-fit w-1/5 text-base md:text-2xl lg:text-2xl xl:text-3xl 3xl:text-4xl 3xl:min-h-14 text-base-100 bg-accent">
											Fechar
										</button>
									</form>
								</div>
							</div>
						</dialog>
					</div>
				</div>
			</div>
		</>
	);
}

EducationCard.propTypes = {
	institution: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
	title: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
	certificate: PropTypes.string.isRequired,
	index: PropTypes.number,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default EducationCard;
