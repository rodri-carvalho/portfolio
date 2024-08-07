import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
	FaIconInfo,
	FaIconKnow,
	FaIconEduc,
	FaIconProjects,
	FaIconContact,
} from "../font-awesome/FaInconsMenu";

const iconMap = {
	1: FaIconInfo,
	2: FaIconKnow,
	3: FaIconEduc,
	4: FaIconProjects,
	5: FaIconContact,
};

function SectionsCard({ page, description, iconId, isOpen, query }) {
	const IconComponent = iconMap[iconId] || (() => <div>No Icon</div>);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.closest(".collapse")) {
				const collapseInputs = document.querySelectorAll(".collapse-input");
				collapseInputs.forEach((input) => {
					input.checked = false;
				});
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div className="collapse collapse-arrow bg-base-200 mb-4 w-10/12 sm:w-3/5 md:w-3/5">
			<input
				type="radio"
				name="my-accordion"
				id={`accordion-${iconId}`}
				className="collapse-input"
				defaultChecked={isOpen}
			/>
			<div className="collapse-title text-xl font-medium">
				<label htmlFor={`accordion-${iconId}`} className="flex items-center cursor-pointer">
					<IconComponent />
					<div className="ml-4">{page}</div>
				</label>
			</div>
			<div className="collapse-content flex flex-col items-center">
				<p className="text-center text-lg">{description}</p>
				<button className="btn btn-active btn-primary mt-4">
					<Link to={`/${query}`} className="btn btn-ghost btn-sm rounded-btn text-lg">
						Ir para a seção
					</Link>
				</button>
			</div>
		</div>
	);
}

SectionsCard.propTypes = {
	page: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	iconId: PropTypes.number.isRequired,
	isOpen: PropTypes.bool,
	query: PropTypes.string,
};

export default SectionsCard;
