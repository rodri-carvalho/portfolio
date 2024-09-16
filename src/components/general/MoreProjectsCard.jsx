import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MoreProjectsCard({ id, title, projectURL, projectPic, description }) {
	return (
		<div className="card card-compact !text-base-100 bg-neutral max-w-full !shadow-2xl rounded-xl 2xs:rounded-2xl">
			<figure className="!shadow-2xl z-10">
				<img
					src={projectPic}
					alt="Imagem do projeto"
					className="h-full rounded-t-xl 2xs:rounded-t-2xl"
				/>
			</figure>
			<div className="card-body rounded-b-xl 2xs:rounded-b-2xl !shadow-2xl bg-secondary z-0">
				<h2 className="card-title justify-center text-center text-xl 5xs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl !mb-0 lg:mt-3 2xl:mt-6 3xl:mt-10">
					{title}
				</h2>
				<div className="divider divider-neutral mb-0 my-2 xl:mt-4 2xl:mt-8 3xl:mt-10 place-self-center w-8/12"></div>
				<div className="flex items-center justify-center h-full">
					<p className="text-pretty md:text-balance justify-center items-center text-center text-lg 5xs:text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 2xl:m-3 3xl:mt-6 md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-normal 3xl:leading-normal">
						{description}
					</p>
				</div>
				<div className="card-actions flex justify-center mt-1 5xs:mt-3 lg:mt-4 xl:mt-5 ">
					<Link
						to={projectURL}
						target="_blank"
						className="botao flex justify-center w-7/12 text-lg 5xs:text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 3xl:min-h-20 3xl:mb-4 !text-base-100 !bg-accent !shadow-2xl py-1 sm:py-2 2xl:py-3 3xl:py-5 rounded-md md:rounded-lg lg:rounded-xl 2xl:rounded-2xl">
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
