import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MoreProjectsCard({ id, title, projectURL, projectPic, description }) {
	return (
		<div className="card card-compact bg-base-100 w-96 shadow-xl max-w-full w-full w-4/5">
			<figure>
				<img src={projectPic} alt="Imagem do projeto" className="h-full max-h-" />
			</figure>
			<div className="card-body">
				<h2 className="card-title justify-center text-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl 3xl:mt-6">
					{title}
				</h2>
				<div className="flex items-center justify-center h-full">
					<p className="justify-center items-center text-center text-pretty 4xl:mx-2 text-lg md:text-xl lg:text-2xl 2xl:text-3xl 2xl:text-4xl 4xl:text-5xl 2xl:m-3 3xl:mt-6 md:leading-snug 4xl:leading-normal">
						{description}
					</p>
				</div>
				<div className="card-actions justify-center md:mt-2 lg:mt-3 xl:mt-4">
					<Link
						to={projectURL}
						target="_blank"
						className="btn w-7/12 text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl 3xl:min-h-20 4xl:min-h-28 3xl:mb-4 4xl:mb-6">
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
