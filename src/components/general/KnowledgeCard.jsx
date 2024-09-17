import React from "react";
import { iconMap, techMap } from "../../../public/assets/db/knowledge";
import PropTypes from "prop-types";

function KnowledgeCard({ iconId, techId, inProgress, techList }) {
	const IconComponent = iconMap[iconId] || (() => <div>No Icon</div>);
	const techName = techMap[techId] || "No Tech";
	const items = techList
		.split(";")
		.map((item) => item.trim())
		.filter((item) => item);

	const modalId = `modal-${iconId}`;

	const openModal = () => {
		const modal = document.getElementById(modalId);
		if (modal) {
			modal.showModal();

			// Espera o próximo frame para garantir a renderização correta e então rola o modal para o topo
			requestAnimationFrame(() => {
				const modalBox = modal.querySelector(".modal-box");
				if (modalBox) {
					modalBox.scrollTop = 0; // Garante que o conteúdo da modal box role para o topo
				}
			});
		}
	};

	// Função para fechar o modal ao clicar fora dele
	const handleOutsideClick = (e) => {
		const modal = document.getElementById(modalId);
		if (e.target === modal) {
			modal.close();
		}
	};

	return (
		<>
			<button
				className={`card botao !bg-accent !shadow-2xl p-1 flex justify-center items-center max-h-fit ${
					inProgress ? "disabled-button" : ""
				}`}
				disabled={inProgress}
				onClick={() => openModal()}
				aria-label={`Open modal for ${techName}`}>
				{inProgress && (
					<div className="indicator flex absolute">
						<span className="indicator-item badge h-fit badge-primary 5xs:text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl py-1 px-5 bg-info text-base-100 border-0">
							Em andamento
						</span>
					</div>
				)}
				<div className="flex items-center !w-full !h-full">
					<div className="card-body flex items-center p-1 gap-3 xl:gap-5 3xl:gap-10">
						<label htmlFor={`tech-${iconId}`} className="flex items-center cursor-pointer pt-3">
							<IconComponent className="text-6xl sm:text-7xl xl:text-9xl" />
						</label>
						<p className="lg:h-full text-xl 5xs:text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl">
							{techName}
						</p>
						<div className="card-actions justify-end"></div>
					</div>
				</div>
			</button>

			<dialog
				id={modalId}
				className="modal modal-bottom sm:modal-middle text-base-100"
				onClick={handleOutsideClick}>
				<div className="modal-box pt-4 sm:pt-5 xl:pt-7 sm:rounded-3xl sm:max-w-full md:max-w-fit 2xl:pl-14 bg-accent !shadow-2xl">
					<ul className="list-disc pl-4 5xs:text-lg 3xs:text-xl 2xs:text-2xl xs:text-3xl md:text-xl lg:text-3xl xl:text-4xl 3xl:text-6xl 2xl:p-2 xs:ml-2 sm:ml-4 xl:ml-7">
						{items.map((item, index) => (
							<li
								key={index}
								className="mb-1 3xs:mb-2 xs:mb-3 md:mb-1 xl:mb-3 2xl:mb-4 3xl:mb-7 lg:p-1">
								{item}
							</li>
						))}
					</ul>
					<div className="modal-action w-full md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-0">
						<form
							method="dialog"
							className="w-full flex justify-center items-center 2xs:mt-2 xs:mt-3 sm:mt-4 md:mt-1 lg:mt-2 xl:mt-6 2xl:mt-4 3xl:mt-8 xl:mb-3 3xl:mb-5">
							<button className="botao !bg-neutral p-1 w-1/3 sm:w-1/4 text-lg 6xs:text-xl 2xs:text-2xl xs:text-3xl md:text-xl lg:text-3xl xl:text-4xl 3xl:text-6xl text-base-100 border-0 3xs:py-1 2xs:py-2 sm:py-3 md:py-2 lg:py-3 3xl:py-6 xl:py-4 lg:rounded-xl xl:rounded-2xl 3xl:rounded-3xl !shadow-2xl">
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
