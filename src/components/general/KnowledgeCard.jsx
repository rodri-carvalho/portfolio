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
				className={`card bg-base-100 shadow-xl p-1 flex justify-center items-center ${
					inProgress ? "disabled-button" : ""
				}`}
				disabled={inProgress}
				onClick={() => document.getElementById(modalId).showModal()}
				aria-label={`Open modal for ${techName}`}>
				{inProgress && (
					<div className="indicator flex absolute">
						<span className="indicator-item badge badge-primary">Em andamento</span>
					</div>
				)}

				<div className="card-body flex items-center gap-4 p-1">
					<label htmlFor={`tech-${iconId}`} className="flex items-center cursor-pointer pt-3">
						<IconComponent className="text-6xl" />
					</label>
					<p className="text-xl">{techName}</p>
					<div className="card-actions justify-end"></div>
				</div>
			</button>

			<dialog id={modalId} className="modal modal-bottom sm:modal-middle">
				<div className="modal-box pt-4 lg:max-w-fit">
					<ul className="list-disc pl-4">
						{items.map((item, index) => (
							<li key={index} className="mb-1">
								{item}
							</li>
						))}
					</ul>
					<div className="modal-action w-full mt-4">
						<form method="dialog" className="w-full flex justify-center">
							<button className="btn p-1 w-2/6 text-base">Fechar</button>
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
