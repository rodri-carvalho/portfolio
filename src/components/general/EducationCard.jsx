import React from "react";
import PropTypes from "prop-types";

function EducationCard({ institution, title, date, pic }) {
	return (
		<>
			<div className="card bg-base-100 image-full w-full lg:96 md:h-80 sm:h-52 shadow-xl">
				<figure>
					<img src={pic} alt={`logo ${institution}`} className="w-full" />
				</figure>
				<div className="card-body">
					<h2 className="card-title text-2xl">{institution}</h2>
					<p className="text-xl">{title}</p>
					<p>{date}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Ver mais</button>
					</div>
				</div>
			</div>
		</>
	);
}

EducationCard.propTypes = {
	institution: PropTypes.string,
	title: PropTypes.string,
	date: PropTypes.string,
	pic: PropTypes.string,
};

export default EducationCard;
