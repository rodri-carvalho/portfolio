import React from "react";
import PropTypes from "prop-types";
import ModalCourses from "./ModalCourses";

function CourseCard({
	title,
	subtitle,
	description,
	learned,
	pic,
	inProgress,
	certificate,
	certificate2,
	uniqueCertificate,
}) {
	const modalIdDescription = `modal-description-${title}`;
	const modalIdLearned = `modal-learned-${title}`;
	const modalIdCertificate = `modal-certificate-${title}`;
	const modalIdCertificate2 = `modal-certificate2-${title}`;

	return (
		<>
			<div className="card w-fit max-w-full flex justify-center mx-auto image-full shadow-xl">
				<figure>
					<img src={pic} alt={`logo ${title}`} className="w-full opacity-85" />
					{inProgress && (
						<div className="emAndamento flex absolute -top-2 4xs:-top-3 3xs:-top-3 2xs:-top-2 sm:-top-4 xl:-top-4 3xl:-top-5 -right-1 z-10">
							<div className="badge badge-accent text-base 4xs:text-lg sm:text-2xl md:text-xl lg:text-2xl 2xl:text-3xl h-fit w-fit px-3 py-1 bg-info text-base-100">
								Em andamento
							</div>
						</div>
					)}
				</figure>
				<div className="card-body w-full h-full px-3 py-4 gap-y-5 3xl:gap-y-12 2xl:flex 2xl:justify-center !text-base-100">
					<h2 className="card-title px-2 pt-2 md:pt-3 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl 2xl:mt-4 2xl:ml-4 3xl:mt-8 3xl:ml-8">
						{title}
					</h2>
					<p className="px-2 text-xl 4xs:text-2xl sm:text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 2xl:ml-4 3xl:ml-8 3xl:leading-snug">
						{subtitle}
					</p>
					<div
						className={`card-actions flex flex-col items-center mt-4 2xl:px-2 max-h20 2xl:text-center 3xl:gap-y-4 ${
							!uniqueCertificate && "translate-y-3 2xl:translate-y-2 3xl:translate-y-4"
						}`}>
						<div className="w-full flex flex-col 2xl:items-center">
							<div className="flex gap-x-4 2xl:w-full">
								<div className="w-1/2 px-1">
									<ModalCourses
										modalId={modalIdDescription}
										buttonLabel="Descrição"
										content={description}
										title={title}
									/>
								</div>
								<div className="w-1/2 px-1">
									<ModalCourses
										modalId={modalIdLearned}
										buttonLabel="Conteúdo"
										content={learned}
										title={title}
									/>
								</div>
							</div>
						</div>

						{!uniqueCertificate && (
							<div className="w-full flex flex-col 2xl:items-center">
								<div className="flex gap-x-4 2xl:w-full">
									<div className="w-full px-1">
										<ModalCourses
											modalId={modalIdCertificate}
											buttonLabel="Certificado Frontend"
											imageSrc={certificate}
											title={title}
										/>
									</div>
									<div className="w-full px-1">
										<ModalCourses
											modalId={modalIdCertificate2}
											buttonLabel="Certificado Backend"
											imageSrc={certificate2}
											title={title}
										/>
									</div>
								</div>
							</div>
						)}

						<div className="w-4/6 flex justify-center max-w-80">
							{!inProgress && uniqueCertificate ? (
								<ModalCourses
									modalId={modalIdCertificate}
									buttonLabel="Certificado"
									imageSrc={certificate}
									title={title}
								/>
							) : null}

							{inProgress ? (
								<ModalCourses
									modalId={modalIdCertificate}
									buttonLabel="Certificado"
									imageSrc={certificate}
									title={title}
									inactive={true}
								/>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

CourseCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
		.isRequired,
	learned: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
	pic: PropTypes.string.isRequired,
	certificate: PropTypes.string.isRequired,
	certificate2: PropTypes.string,
	inProgress: PropTypes.bool.isRequired,
	uniqueCertificate: PropTypes.bool.isRequired,
};

export default CourseCard;
