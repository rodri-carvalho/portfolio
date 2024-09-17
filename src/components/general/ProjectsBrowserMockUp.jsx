import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectsBrowserMockUp({ id, title, projectURL, repoURL, projectPic, description }) {
	const modalId = `modal-${id}`;
	const modalRef = useRef(null);

	// Função para abrir o modal e rolar para o topo
	const openModal = () => {
		const modal = modalRef.current;
		if (modal) {
			modal.showModal();

			// Espera o próximo frame para garantir a renderização correta e então rola o modal para o topo
			requestAnimationFrame(() => {
				modal.scrollTop = 0; // Rola o modal para o topo
				const modalBox = modal.querySelector(".modal-box");
				if (modalBox) {
					modalBox.scrollTop = 0; // Garante que o conteúdo da modal box também role para o topo
				}
			});
		}
	};

	const closeModal = (event) => {
		const modal = modalRef.current;
		if (modal && !modal.querySelector(".modal-box").contains(event.target)) {
			modal.close();
		}
	};

	// Adiciona o evento para fechar o modal ao clicar fora dele
	useEffect(() => {
		const modal = modalRef.current;
		if (modal) {
			modal.addEventListener("click", closeModal);
		}
		return () => {
			if (modal) {
				modal.removeEventListener("click", closeModal);
			}
		};
	}, []);

	return (
		<>
			<button
				onClick={openModal}
				className="p-0 rounded-2xl !shadow-2xl border-0 outline-hidden h-fit !3xl:rounded-3xl">
				<div className="mockup-browser bg-accent border-0 h-full overflow-hidden !3xl:rounded-3xl">
					<div className="mockup-browser-toolbar gap-2 lg:gap-4 2xl:gap-6 3xl:gap-8 text-base-100">
						<div className="campo flex justify-start w-9/12 sm:w-10/12 md:w-full 3xl:ml-10 xl:py-1 3xl:py-3 pr-1">
							<div className="input !bg-neutral rounded-lg !flex !m-0 md:py-4 lg:py-5 xl:py-7 3xl:py-10 items-center text-xs w-11/12 3xs:!w-full 5xs:text-sm 4xs:text-base sm:text-lg lg:text-xl xl:text-2xl 3xl:text-4xl md:rounded-3xl 2xl:rounded-full">
								{projectURL}
							</div>
						</div>
					</div>
					<div className="bg-base-200 flex flex-col justify-center 2xs:!h-full ">
						<img src={projectPic} alt="" className="" />
					</div>
					<div className="text-lg 4xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl py-1 4xs:py-1 sm:py-2 lg:py-3 xl:py-4 2xl:py-5 3xl:py-8 !3xl:rounded-3xl">
						{title}
					</div>
				</div>
			</button>
			<dialog id={modalId} ref={modalRef} className="modal">
				<div className="modal-box max-w-full 3xl:w-4/6 flex flex-col items-center p-3 md:p-6 lg:p-8 2xl:p-9 3xl:p-14 2xl:rounded-3xl bg-accent !shadow-2xl">
					<img src={projectPic} alt={`Imagem do Projeto ${title}`} className="rounded-md" />
					<h2 className="text-2xl xs:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 3xl:mt-16">
						{title}
					</h2>
					<div className="divider divider-neutral place-self-center mb-0 6xs:mb-1 md:mb-2 lg:mb-3 2xl:mb-4 3xl:mb-6 mt-4 xs:mt-5 md:mt-6 lg:mt-8 2xl:mt-10 3xl:mt-12 w-7/12 3xs:w-6/12 md:w-5/12 lg:w-4/12"></div>
					<div className="mt-3">
						{Array.isArray(description) ? (
							description.map((paragraph, index) => (
								<p
									key={index}
									className="text-justify xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl indent-8 5xs:indent-10 4xs:indent-11 3xs:indent-12 xs:indent-16 sm:indent-20 lg:indent-24 xl:indent-28 2xl:indent-32 3xl:indent-36 sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal 2xl:leading-normal 3xl:leading-normal px-1 4xs:px-2 2xs:px-3 xs:px-4 md:px-6 lg:px-8 xl:px-10">
									{paragraph}
									<br />
									<br />
								</p>
							))
						) : (
							<p className="text-justify md:text-xl lg:text-2xl 2xl:text-4xl 3xl:text-5xl indent-7 lg:indent-9 2xl:indent-12 3xl:indent-20 md:leading-relaxed 2xl:leading-normal 3xl:leading-normal">
								{description}
							</p>
						)}
					</div>
					<div className="modal-action flex justify-center w-full mt-0">
						<form method="dialog" className="w-full">
							<div className="flex flex-col items-center w-full gap-3 5xs:gap-4 sm:gap-5 lg:gap-7 xl:gap-7 2xl:gap-8 3xl:gap-11">
								<div className="w-full flex justify-center">
									<Link
										to={projectURL}
										target="_blank"
										className="botao flex justify-center items-center rounded-lg 2xs:rounded-xl xl:rounded-2xl 2xl:rounded-2xl py-2 lg:py-4 2xl:py-6 w-3/5 2xs:w-1/4 xs:w-1/4 md:w-1/4 2xl:w-1/5 3xl:w-1/4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl !bg-secondary !shadow-2xl">
										Visitar Projeto
									</Link>
								</div>
								<div className="w-full flex justify-center">
									<Link
										to={repoURL}
										target="_blank"
										className="botao flex justify-center items-center rounded-lg 2xs:rounded-xl xl:rounded-2xl 2xl:rounded-2xl py-2 lg:py-4 2xl:py-6 w-3/5 2xs:w-1/4 xs:w-1/4 md:w-1/4 2xl:w-1/5 3xl:w-1/4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl !bg-secondary !shadow-2xl">
										Repositório GitHub
									</Link>
								</div>
								<button className="botao flex justify-center items-center rounded-lg 2xs:rounded-xl md:rounded-2xl xl:rounded-2xl 2xl:rounded-2xl py-2 lg:py-4 2xl:py-6 w-2/5 2xs:w-1/6 md:w-1/6 3xl:w-1/5 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl !bg-secondary !shadow-2xl">
									<div className="min-h-fit">Fechar</div>
								</button>
							</div>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}

ProjectsBrowserMockUp.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	projectURL: PropTypes.string.isRequired,
	repoURL: PropTypes.string.isRequired,
	projectPic: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default ProjectsBrowserMockUp;
