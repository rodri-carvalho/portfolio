import React from "react";
import PropTypes from "prop-types";

function EducationCard({ institution, title, pic, certificate, index, content = "" }) {
	const modalId = `modal-${index}`;

	return (
		<>
			<div className="card bg-base-100 image-full w-fit 2xl:w-full lg:96 md:h-auto sm:h-52 shadow-xl flex flex-col justify-between 3xl:mx-10">
				<figure className="w-full">
					<img src={pic} alt={`logo ${institution}`} className="w-full" />
				</figure>
				<div className="card-body py-6 px-4 flex flex-col !w-full">
					<h2 className="card-title flex flex-col items-start gap-1 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl">
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
						<p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl grow-0">
							{title}
						</p>
					</div>
					<div className="card-actions justify-end mr-4 3xl:h-full 3xl:flex 3xl:items-end">
						<button
							className="btn h-fit w-fit px-5 py-2 mt-5 bottom-5 text-base md:text-lg lg:text-2xl 2xl:text-3xl 3xl:text-4xl lg:p-4 2xl:mr-10 3xl:mr-16 3xl:mb-10 2xl:p-3 3xl:p-7 2xl:rounded-2xl"
							onClick={() => document.getElementById(modalId).showModal()}>
							Diploma
						</button>

						<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
							<div className="modal-box">
								<img src={certificate} alt={`Diploma do curso de ${title}`} />
								<div className="modal-action justify-center w-full">
									<form method="dialog" className="w-full flex justify-center">
										<button className="btn w-2/5 text-base">Fechar</button>
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
