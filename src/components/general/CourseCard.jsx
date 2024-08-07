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
			<div className="card w-fit max-w-xl flex justify-center mx-auto bg-base-100 image-full shadow-xl">
				<figure>
					<img src={pic} alt={`logo ${title}`} className="w-full opacity-50" />
					{inProgress && (
						<div className="emAndamento flex absolute -top-1 -right-1 z-10">
							<div className="badge badge-accent">Em andamento</div>
						</div>
					)}
				</figure>
				<div className="card-body w-full h-full px-3">
					<h2 className="card-title text-2xl px-2">{title}</h2>
					<p className="text-xl px-2">{subtitle}</p>
					<div className="card-actions flex flex-col items-center mt-4">
						<div className="w-full flex flex-col">
							<div className="flex justify-around">
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

						<div className="w-full flex flex-col">
							{!uniqueCertificate && (
								<div className="flex justify-around">
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
							)}
						</div>

						<div className="w-full flex justify-center max-w-80">
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
	learned: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
	certificate: PropTypes.string.isRequired,
	certificate2: PropTypes.string,
	inProgress: PropTypes.bool.isRequired,
	uniqueCertificate: PropTypes.bool.isRequired,
};

export default CourseCard;
