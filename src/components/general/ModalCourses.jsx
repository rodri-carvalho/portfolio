import React from "react";
import PropTypes from "prop-types";
import { FaCode } from "react-icons/fa6";

function ModalCourses({
	modalId,
	buttonLabel,
	content = [],
	title,
	imageSrc = null,
	inactive = false,
}) {
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
				className={`botao !bg-accent w-full text-base 4xs:text-lg sm:text-2xl md:text-xl lg:text-2xl 2xl:text-3xl h-fit 3xl:text-4xl xl:rounded-lg 2xl:rounded-xl 3xl:rounded-2xl text-base-100 !shadow-2xl ${
					inactive ? "disabledBtn" : ""
				}`}
				onClick={!inactive ? openModal : null}
				aria-label={`Open modal for ${title}`}>
				{buttonLabel}
			</button>

			<dialog
				id={modalId}
				className="modal modal-bottom sm:modal-middle 2xs:modal-middle flex justify-center overflow-y-auto scroll-smooth" // Remova modal-bottom
				onClick={handleOutsideClick}>
				<div
					className={`modal-box px-6 2xs:px-8 sm:px-10 2xl:px-6  3xl:py-8 2xs:pt-6 py-3 sm:py-5  2xl:py-6 3xl:px-8 !max-w-fit sm:w-4/5 md:w-3/5 2xl:w-2/5 bg-accent !shadow-2xl 2xs:py-4 sm:rounded-3xl`}>
					{!imageSrc && (
						<div className="w-full flex justify-center">
							<div className="divider divider-neutral w-10/12 2xs:w-8/12 md:w-7/12 2xl:w-8/12 self-center my-3 2xs:mb-6 2xs:mt-4 xs:mb-7 xs:mt-4 sm:my-8 md:mt-2 md:mb-5 lg:mt-4 lg:mb-7 xl:mt-5 xl:mb-9 2xl:mt-7 2xl:mb-12 3xl:mt-12 3xl:mb-16">
								<FaCode className="!text-base-100 text-5xl 5xs:text-6xl md:text-5xl lg:text-7xl xl:text-8xl 3xl:text-9xl" />
							</div>
						</div>
					)}
					{imageSrc ? (
						<img
							src={imageSrc}
							alt={`Certificado do curso ${title}`}
							className="pb-4 xl:pb-5 2xl:pb-6 3xl:pb-8"
						/>
					) : (
						<div className="xl:py-4 xl:px-2 2xl:px-4 3xl:px-6 md:pt-0 3xl:pt-6">
							{buttonLabel === "Descrição" ? (
								content.map((paragraph, index) => (
									<p
										key={index}
										className="text-justify text-lg 5xs:text-lg 4xs:text-xl xs:text-2xl md:text-xl lg:text-3xl xl:text-4xl 3xl:text-5xl leading-normal 6xs:leading-relaxed 5xs:leading-relaxed 4xs:leading-relaxed 3xs:leading-relaxed 2xs:leading-relaxed xs:leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-normal xl:leading-relaxed 2xl:leading-normal 3xl:leading-relaxed pb-5 xs:pb-8 xl:pb-8 2xl:pb-10 3xl:pb-12 indent-10">
										{paragraph}
										<br />
									</p>
								))
							) : (
								<div className="sm:flex sm:justify-center pb-5 sm:pt-2 md:pt-0 pl-6 4xs:pl-4 sm:pl-8 3xl:pl-14">
									<ul className="list-disc list-outside space-y-1 text-lg 4xs:text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-6xl">
										{content.map((item, index) => (
											<li
												key={index}
												className="text-left pl-1 3xs:pb-1 sm:pb-3 md:pb-1 lg:pb-2 xl:pb-3 2xl:pb-4 3xl:pb-8">
												{item}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					)}
					<div className="modal-action w-full mt-0">
						<form method="dialog" className="w-full flex justify-center">
							<button className="botao flex justify-center items-center text-lg 4xs:text-xl xs:text-2xl md:text-xl lg:text-3xl xl:text-4xl 3xl:text-5xl 2xl:px-10 3xl:min-h-20 text-base-100 !bg-secondary !shadow-2xl py-0 px-4 xs:py-3 xs:px-6 sm:py-3 sm:px-7 xl:py-4 xl:px-10 3xl:px-16 3xl:py-5 xl:rounded-2xl 2xs:mt-1 sm:-mt-2 md:mb-1 xs:mt-1 xs:mb-2">
								Fechar
							</button>
						</form>
					</div>
					<div className="w-full flex justify-center">
						<div className="divider divider-neutral w-10/12 2xs:w-8/12 md:w-7/12 2xl:w-8/12 self-center mt-6 6xs:mt-6 6xs:mb-6 5xs:mt-7 5xs:mb-8 3xs:mt-7 2xs:mb-4 xs:mt-6 md:mt-6 md:mb-1 lg:mt-8 lg:mb-2 xl:mt-10 xl:mb-4 2xl:mt-12 2xl:mb-6 3xl:mt-20 3xl:mb-14">
							<FaCode className="!text-base-100 text-5xl 5xs:text-6xl xs:text-7xl md:text-5xl lg:text-7xl xl:text-8xl 3xl:text-9xl" />
						</div>
					</div>
				</div>
			</dialog>
		</>
	);
}

ModalCourses.propTypes = {
	modalId: PropTypes.string.isRequired,
	buttonLabel: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
	title: PropTypes.string.isRequired,
	imageSrc: PropTypes.string,
	inactive: PropTypes.bool,
};

export default ModalCourses;
