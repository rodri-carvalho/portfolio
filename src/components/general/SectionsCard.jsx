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
		<div className="collapse collapse-arrow mb-4 w-10/12 sm:w-3/5 md:w-3/5 lg:w-4/5 xl:w-2/5 2xl:w-3/6 3xl:w-2/5 bg-accent ease-in-out">
			<input
				type="radio"
				name="my-accordion"
				id={`accordion-${iconId}`}
				className="collapse-input"
				defaultChecked={isOpen}
			/>
			<div className="collapse-title custom-collapse flex justify-between items-center 2xl:w-11/12 3xl:w-full font-medium text-base-100 2xl:my-3 2xl:ml-6 3xl:ml-3 3xl:my-3">
				<label
					htmlFor={`accordion-${iconId}`}
					className="flex items-center cursor-pointer lg:text-2xl 2xl:text-4xl">
					<IconComponent />
					<div className="ml-2 2xl:ml-0 xs:text-2xl lg:text-3xl 2xl:text-5xl 2xl:pl-4">
						{page}
					</div>
				</label>
			</div>
			<div className="collapse-content flex flex-col items-center text-base-100">
				<p className="text-center text-lg xs:text-xl lg:text-3xl 2xl:text-4xl 3xl:py-6">
					{description}
				</p>
				<button className="botao mt-4 lg:mt-6 lg:my-3 2xl:my-3 2xl:mt-10 2xl:mb-7 !bg-neutral">
					<Link
						to={`/${query}`}
						className="p-0 text-lg xs:text-xl lg:text-3xl 2xl:text-4xl !bg-neutral">
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
