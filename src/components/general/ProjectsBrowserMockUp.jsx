import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectsBrowserMockUp({ id, title, projectURL, projectPic, description }) {
	const modalId = `modal-${id}`;

	const openModal = () => {
		const modal = document.getElementById(modalId);
		if (modal) {
			modal.showModal();
			// Use requestAnimationFrame para garantir que o modal tenha tempo para abrir antes de rolar
			requestAnimationFrame(() => {
				modal.scrollTop = 0;
			});
		}
	};

	return (
		<>
			<button onClick={openModal} className="p-0 rounded-2xl">
				<div className="mockup-browser bg-base-300 border">
					<div className="mockup-browser-toolbar">
						<div className="flex justify-start w-3/4">
							<div className="input !flex items-center text-xs">{projectURL}</div>
						</div>
					</div>
					<div className="bg-base-200 flex flex-col justify-center">
						<img src={projectPic} alt="" className="" />
					</div>
				</div>
			</button>
			<dialog id={modalId} className="modal">
				<div className="modal-box max-w-full flex flex-col items-center">
					<img src={projectPic} alt={`Imagem do Projeto ${title}`} className="rounded-md" />
					<h2 className="text-xl mt-4">{title}</h2>
					<div className="mt-3">
						{Array.isArray(description) ? (
							description.map((paragraph, index) => (
								<p key={index} className="text-justify">
									{paragraph}
									<br />
									<br />
								</p>
							))
						) : (
							<p>{description}</p>
						)}
					</div>
					<div className="modal-action flex justify-center w-full">
						<form method="dialog" className="w-full">
							<div className="flex flex-col items-center gap-4 w-full">
								<div className="w-full flex justify-center">
									<Link to={projectURL} target="_blank" className="btn w-3/5 text-xl">
										Visitar Projeto
									</Link>
								</div>
								<button className="btn w-2/5 text-lg">Fechar</button>
							</div>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}

ProjectsBrowserMockUp.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	projectURL: PropTypes.string.isRequired,
	projectPic: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default ProjectsBrowserMockUp;
