import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
	FaIconKnow,
	FaIconEduc,
	FaIconProjects,
	FaIconContact,
} from "../font-awesome/FaInconsMenu";
import { FaInfo } from "react-icons/fa6";

const iconMap = {
	1: FaInfo,
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
		<div className="collapse collapse-arrow bg-accent ease-in-out w-11/12 2xs:w-9/12 sm:w-8/12 md:w-7/12 lg:w-1/2 xl:rounded-xl 2xl:rounded-3xl">
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
					className="flex items-center cursor-pointer text-xl 3xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl 3xl:text-7xl gap-1 md:gap-2 2xl:gap-3 3xl:gap-5 sm:ml-1 2xl:ml-2 3xl:ml-4">
					<IconComponent />
					<div className="ml-2 2xl:ml-0 2xl:pl-4">{page}</div>
				</label>
			</div>
			<div className="collapse-content flex flex-col items-center text-base-100">
				<p className="text-center text-balance text-lg 3xs:text-xl 2xs:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 3xl:py-6 xl:mt-4">
					{description}
				</p>
				<button className="botao mt-4 3xs:mt-5 3xs:mb-2 2xs:mt-7 2xs:mb-4 xs:mt-6 xs:mb-3 lg:mt-7 lg:my-4 xl:mt-8 xl:mb-5 2xl:mt-12 2xl:mb-8 !bg-neutral 2xl:p-4 3xl:p-4 !shadow-2xl">
					<Link
						to={`/${query}`}
						className="p-0 text-lg 3xs:text-xl 2xs:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl !bg-neutral">
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
