import React from "react";
import PropTypes from "prop-types";

function EducationCard({ institution, title, pic, certificate, index }) {
	const modalId = `modal-${index}`;

	return (
		<>
			<div className="card bg-base-100 image-full w-full lg:96 md:h-80 sm:h-52 shadow-xl">
				<figure>
					<img src={pic} alt={`logo ${institution}`} className="w-full" />
				</figure>
				<div className="card-body">
					<h2 className="card-title text-2xl">{institution}</h2>
					<p className="text-xl">{title}</p>
					<div className="card-actions justify-end">
						<button className="btn" onClick={() => document.getElementById(modalId).showModal()}>
							Diploma
						</button>
						<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
							<div className="modal-box">
								<img src={certificate} alt={`Diploma do curso de ${title}`} />
								<div className="modal-action">
									<form method="dialog">
										<button className="btn">Fechar</button>
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
	institution: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
	certificate: PropTypes.string.isRequired,
	index: PropTypes.number,
};

export default EducationCard;
