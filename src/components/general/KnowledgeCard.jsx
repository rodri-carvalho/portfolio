import React, { useState, useEffect } from "react";
import { iconMap, techMap } from "../../db/knowledge";
import PropTypes from "prop-types";
import { SlArrowDown } from "react-icons/sl";
import { FaCode } from "react-icons/fa6";

function KnowledgeCard({ iconId, techId, inProgress, techList }) {
	const IconComponent = iconMap[iconId] || (() => <div>No Icon</div>);
	const techName = techMap[techId] || "No Tech";
	const items = techList
		.split(";")
		.map((item) => item.trim())
		.filter((item) => item);

	const modalId = `modal-${iconId}`;

	// Estado para controlar a visibilidade da seta (false significa que a seta sumiu e não voltará)
	const [arrowVisible, setArrowVisible] = useState(true);

	const openModal = () => {
		const modal = document.getElementById(modalId);
		if (modal) {
			modal.showModal();

			// Espera o próximo frame para garantir a renderização correta e então rola o modal para o topo
			requestAnimationFrame(() => {
				const modalBox = modal.querySelector(".modal-box");
				if (modalBox) {
					modalBox.scrollTop = 0; // Garante que o conteúdo da modal box role para o topo
					// Adiciona o evento de scroll apenas para o modal
					modalBox.addEventListener("scroll", handleScroll);
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

	// Função para esconder a seta ao scrollar mais de 1px, mas sem permitir que ela reapareça
	const handleScroll = (e) => {
		const scrollTop = e.target.scrollTop;
		if (scrollTop > 10 && arrowVisible) {
			setArrowVisible(false);
		}
	};

	// Limpa o evento de scroll quando o modal é fechado
	useEffect(() => {
		const modal = document.getElementById(modalId);
		return () => {
			if (modal) {
				const modalBox = modal.querySelector(".modal-box");
				if (modalBox) {
					modalBox.removeEventListener("scroll", handleScroll);
				}
			}
		};
	}, []);

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
					<div className="card-body flex items-center p-1 gap-3 xl:gap-5 3xl:gap-14 3xl:mt-14">
						<label htmlFor={`tech-${iconId}`} className="flex items-center cursor-pointer pt-3">
							<IconComponent className="text-5xl sm:text-7xl xl:text-9xl" />
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
				<div className="modal-box pt-4 sm:pt-5 xl:pt-7 sm:rounded-3xl sm:max-w-full md:max-w-fit 2xl:pl-14 bg-accent !shadow-2xl h-3/5 sm:h-fit">
					{/* Condicional para exibir ou esconder a seta */}
					{arrowVisible && (
						<div className="arrowDiv absolute w-full h-full flex justify-center items-end -translate-x-8 -translate-y-4 3xs:-translate-y-2 sm:hidden">
							<SlArrowDown
								alt="Arrow Down"
								className="arrow !text-base-100 h-20 w-20 5xs:h-20 5xs:w-20 3xs:h-24 3xs:w-24 2xs:h-28 2xs:w-28"
							/>
						</div>
					)}

					<div className="w-full flex justify-center">
						<div className="divider divider-neutral w-10/12 2xs:w-8/12 md:w-7/12 2xl:w-8/12 self-center my-3 2xs:my-6 xs:my-7 sm:my-8 md:mt-2 md:mb-5 lg:mt-4 lg:mb-7 xl:mt-5 xl:mb-9 2xl:mt-7 2xl:mb-12 3xl:mt-12 3xl:mb-16">
							<FaCode className="!text-base-100 text-5xl 5xs:text-6xl 2xs:text-7xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl 3xl:h-44 3xl:w-44" />
						</div>
					</div>

					<ul className="list-disc pl-4 5xs:text-lg 3xs:text-xl 2xs:text-2xl xs:text-3xl md:text-xl lg:text-3xl xl:text-4xl 3xl:text-6xl 2xl:p-2 xs:ml-2 sm:ml-4 xl:ml-7">
						{items.map((item, index) => (
							<li
								key={index}
								className="mb-1 3xs:mb-2 xs:mb-3 md:mb-1 xl:mb-3 2xl:mb-4 3xl:mb-7 lg:p-1">
								{item}
							</li>
						))}
					</ul>
					<div className="modal-action w-full sm:mt-6 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-0">
						<form
							method="dialog"
							className="w-full flex justify-center items-center 2xs:mt-2 xs:mt-3 sm:mt-4 md:mt-1 lg:mt-2 xl:mt-6 2xl:mt-4 3xl:mt-8 xl:mb-3 3xl:mb-5">
							<button className="botao !bg-neutral p-1 w-1/3 sm:w-1/4 text-lg 2xs:text-2xl xs:text-3xl md:text-xl lg:text-3xl xl:text-4xl 3xl:text-6xl text-base-100 border-0 3xs:py-1 2xs:py-2 sm:py-3 md:py-2 lg:py-3 3xl:py-6 xl:py-4 lg:rounded-xl xl:rounded-2xl 3xl:rounded-3xl !shadow-2xl">
								Fechar
							</button>
						</form>
					</div>
					<div className="w-full flex justify-center">
						<div className="divider divider-neutral w-10/12 2xs:w-8/12 md:w-7/12 2xl:w-8/12 self-center mt-6 6xs:mt-7 5xs:mt-8 2xs:mt-10 xs:mt-12 md:mt-6 md:mb-1 lg:mt-8 lg:mb-2 xl:mt-10 xl:mb-4 2xl:mt-10 2xl:mb-6 3xl:mt-16 3xl:mb-14">
							<FaCode className="!text-base-100 text-5xl 5xs:text-6xl 2xs:text-7xl md:text-6xl lg:text-7xl xl:text-8xl 3xl:text-9xl 3xl:h-44 3xl:w-44" />
						</div>
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
