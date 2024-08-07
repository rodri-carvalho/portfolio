import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectsBrowserMockUp({ id, title, projectURL, projectPic, description }) {
	const modalId = `modal-${id}`;

	return (
		<>
			<button
				onClick={() => document.getElementById(modalId).showModal()}
				className="p-0 rounded-2xl">
				<div className="mockup-browser bg-base-300 border">
					<div className="mockup-browser-toolbar flex justify-between pl-4">
						<div className="flex justify-start w-full pl-6">
							<div className="input !flex !justify-start items-center !m-0 !w-11/12">
								{projectURL}
							</div>
						</div>
					</div>
					<div className="bg-base-200 flex flex-col justify-center">
						<img src={projectPic} alt="" className="" />
					</div>
				</div>
			</button>
			<dialog id={modalId} className="modal">
				{/* TODO: continuar w do modal */}
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
					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Fechar</button>
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
