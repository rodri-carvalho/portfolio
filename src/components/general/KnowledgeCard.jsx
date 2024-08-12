import React from "react";
import { iconMap, techMap } from "../../assets/db/knowledge";
import PropTypes from "prop-types";

function KnowledgeCard({ iconId, techId, inProgress, techList }) {
	const IconComponent = iconMap[iconId] || (() => <div>No Icon</div>);
	const techName = techMap[techId] || "No Tech";
	const items = techList
		.split(";")
		.map((item) => item.trim())
		.filter((item) => item);

	const modalId = `modal-${iconId}`;

	return (
		<>
			<button
				className={`card bg-base-100 shadow-xl p-1 flex justify-center items-center max-h-fit 3xl:m-5 ${
					inProgress ? "disabled-button" : ""
				}`}
				disabled={inProgress}
				onClick={() => document.getElementById(modalId).showModal()}
				aria-label={`Open modal for ${techName}`}>
				{inProgress && (
					<div className="indicator flex absolute">
						<span className="indicator-item badge h-fit badge-primary 2xl:text-2xl 3xl:text-3xl 4xl:text-5xl py-2 px-5">
							Em andamento
						</span>
					</div>
				)}
				<div>
					<div className="card-body flex items-center p-1 gap-6">
						<label htmlFor={`tech-${iconId}`} className="flex items-center cursor-pointer pt-3">
							<IconComponent className="text-6xl 2xl:text-8xl 3xl:text-8xl 4xl:text-9xl" />
						</label>
						<p className="text-xl 2xl:text-5xl 3xl:text-5xl 4xl:text-7xl 4xl:mt-14">{techName}</p>
						<div className="card-actions justify-end"></div>
					</div>
				</div>
			</button>

			<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
				<div className="modal-box pt-4 lg:max-w-fit 25xl:pl-14">
					<ul className="list-disc pl-4 4xl:pl-14 md:text-2xl lg:text-2xl xl:text-3xl 25xl:text-4xl 25xl:p-2">
						{items.map((item, index) => (
							<li key={index} className="mb-1 lg:p-1 4xl:py-4">
								{item}
							</li>
						))}
					</ul>
					<div className="modal-action w-full mt-4 md:mt-10 md:mb-3">
						<form method="dialog" className="w-full flex justify-center">
							<button className="btn p-1 w-2/6 text-base md:text-2xl 25xl:text-3xl 4xl:text-4xl 4xl:h-24 4xl:rounded-2xl">
								Fechar
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}

KnowledgeCard.propTypes = {
	iconId: PropTypes.number.isRequired,
	techId: PropTypes.number.isRequired,
	inProgress: PropTypes.bool.isRequired,
	techList: PropTypes.string,
};

export default KnowledgeCard;
