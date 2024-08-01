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
			<div className="card bg-base-100 image-full w-full lg:96 md:h-80 sm:h-52 shadow-xl">
				<figure>
					<img src={pic} alt={`logo ${title}`} className="w-full" />
				</figure>
				<div className="card-body">
					{inProgress && (
						<div className="emAndamento w-full h-6 flex justify-end items-center">
							<div className="badge badge-accent">Em andamento</div>
						</div>
					)}

					<h2 className="card-title text-2xl">{title}</h2>
					<p className="text-xl">{subtitle}</p>
					<div className="flex flex-col card-actions items-center">
						<div className="w-full flex justify-evenly">
							<ModalCourses
								modalId={modalIdDescription}
								buttonLabel="Descrição"
								content={description}
								title={title}
								inactive={true}
							/>
							<ModalCourses
								modalId={modalIdLearned}
								buttonLabel="Conteúdo"
								content={learned}
								title={title}
							/>
						</div>

						<div>
							{!uniqueCertificate && (
								<div className="flex justify-between">
									<div className="px-2">
										<ModalCourses
											modalId={modalIdCertificate}
											buttonLabel="Certificado Frontend"
											imageSrc={certificate}
											title={title}
										/>
									</div>
									<div className="px-2">
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

						<div>
							{!inProgress && uniqueCertificate ? (
								<ModalCourses
									modalId={modalIdCertificate}
									buttonLabel="Certificado"
									imageSrc={certificate}
									title={title}
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
	description: PropTypes.string.isRequired,
	learned: PropTypes.string.isRequired,
	pic: PropTypes.string.isRequired,
	certificate: PropTypes.string.isRequired,
	certificate2: PropTypes.string,
	inProgress: PropTypes.bool.isRequired,
	uniqueCertificate: PropTypes.bool.isRequired,
};

export default CourseCard;
