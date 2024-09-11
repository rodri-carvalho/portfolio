import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MoreProjectsCard({ id, title, projectURL, projectPic, description }) {
	return (
		// TODO:
		<div className="card card-compact !text-base-100 bg-neutral shadow-xl max-w-full w-96">
			<figure>
				<img src={projectPic} alt="Imagem do projeto" className="h-full max-h-" />
			</figure>
			<div className="card-body">
				<h2 className="card-title justify-center text-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 3xl:mt-6">
					{title}
				</h2>
				<div className="flex items-center justify-center h-full">
					<p className="justify-center items-center text-center text-pretty text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3qxl:text-4xl 2xl:m-3 3xl:mt-6 md:leading-snug">
						{description}
					</p>
				</div>
				<div className="card-actions justify-center md:mt-2 lg:mt-3 xl:mt-4">
					<Link
						to={projectURL}
						target="_blank"
						className="btn botao w-7/12 text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl 3xl:min-h-20 3xl:mb-4 !text-base-100 bg-accent">
						Visitar Projeto
					</Link>
				</div>
			</div>
		</div>
	);
}

MoreProjectsCard.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	projectURL: PropTypes.string.isRequired,
	projectPic: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default MoreProjectsCard;
