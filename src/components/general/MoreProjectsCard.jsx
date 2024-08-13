import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MoreProjectsCard({ id, title, projectURL, projectPic, description }) {
	return (
		<div className="card card-compact bg-base-100 w-96 shadow-xl">
			<figure>
				<img src={projectPic} alt="Imagem do projeto" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
				<div className="card-actions justify-center">
					<Link to={projectURL} target="_blank" className="btn w-3/5 text-xl">
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
