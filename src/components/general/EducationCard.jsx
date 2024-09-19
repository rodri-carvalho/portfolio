import React from "react";
import PropTypes from "prop-types";
import { FaCode } from "react-icons/fa6";

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
			<div className="card image-full shadow-xl flex flex-col justify-between 2xs:mx-1 md:mx-1 ">
				<figure className="w-full">
					<img src={pic} alt={`logo ${institution}`} className="w-full opacity-95" />
				</figure>
				<div className="card-body py-6 px-4 flex flex-col !w-full !text-base-100 xs:gap-4 lg:gap-7 2xl:gap-8 3xl:gap-10">
					<h2 className="card-title flex flex-col items-start gap-1 text-2xl 2xs:text-4xl sm:text-5xl md:text-4xl 2xl:text-5xl 3xl:text-6xl 2xl:ml-6 2xl:mt-4 3xl:ml-8 3xl:mt-8">
						{Array.isArray(content) ? (
							content.map((content, index) => (
								<p key={index} className="text-left">
									{content}
									<br />
								</p>
							))
						) : (
							<p>{content}</p>
						)}
					</h2>

					<p className="text-xl 2xs:text-3xl sm:text-4xl md:text-3xl 2xl:text-5xl 3xl:text-6xl grow-0 2xl:ml-6 3xl:ml-8">
						{title}
					</p>

					<div className="card-actions justify-end h-full 3xl:h-full 3xl:flex 3xl:items-end 2xs:mr-6 2xs:mb-2 sm:mr-12 sm:mb-6 md:mr-5 md:mb-1 lg:mr-8 lg:mb-4 2xl:mr-14 2xl:mb-8 3xl:mr-24 3xl:mb-16">
						<button
							className="botao !bg-secondary h-fit flex self-end w-fit px-5 py-2 2xs:py-4 2xs:px-8 2xl:py-6 3xl:py-10 mt-5 bottom-5 text-base 3xs:text-lg 2xs:text-2xl sm:text-3xl md:text-2xl 2xl:text-3xl 3xl:text-5xl 2xl:rounded-2xl outline-hidden border-0 !shadow-2xl"
							onClick={() => document.getElementById(modalId).showModal()}>
							Diploma
						</button>

						<dialog
							id={modalId}
							className="modal !max-w-full w-full modal-bottom sm:modal-middle md:flex md:justify-center"
							onClick={handleOutsideClick}>
							<div className="modal-box !bg-accent sm:rounded-2xl lg:rounded-3xl !max-w-full sm:w-11/12 md:w-6/12 lg:w-7/12 xl:w-8/12 2xl:w-7/12 md:h-fit px-3 5xs:px-4 2xs:px-6 lg:px-8 xl:px-10 pb-0 pt-3 2xs:pt-5 xs:pt-6 xl:pt-8 3xl:px-14">
								<img src={certificate} alt={`Diploma do curso de ${title}`} className="" />
								<div className="modal-action justify-center mt-4 mb-2 5xs:mt-5 2xs:my-5 xs:mt-7 sm:mt-8 md:mb-4 md:mt-5 lg:my-6 2xl:mt-7 2xl:mb-7 3xl:mt-9 3xl:mb-10">
									<form method="dialog" className=" w-full flex justify-center">
										<button className="botao 2xl:rounded-xl 3xl:rounded-3xl !min-w-fit w-1/5 py-2 sm:py-3 2xl:py-4 3xl:py-7 text-lg 2xs:text-2xl xs:text-3xl md:text-xl lg:text-2xl xl:text-4xl 3xl:text-6xl !bg-secondary !shadow-2xl">
											Fechar
										</button>
									</form>
								</div>
								<div className="w-full flex justify-center sm:hidden">
									<div className="divider divider-neutral w-10/12 2xs:w-8/12 md:w-7/12 2xl:w-8/12 self-center my-4 6xs:my-5 5xs:my-6 2xs:my-4 xs:mt-5 xs:mb-8">
										<FaCode className="!text-base-100 text-5xl 2xs:text-7xl" />
									</div>
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
