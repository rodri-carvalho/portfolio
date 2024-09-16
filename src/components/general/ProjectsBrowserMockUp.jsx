import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectsBrowserMockUp({ id, title, projectURL, projectPic, description }) {
	const modalId = `modal-${id}`;
	const modalRef = useRef(null);

	const openModal = () => {
		const modal = modalRef.current;
		if (modal) {
			modal.showModal();
			requestAnimationFrame(() => {
				modal.scrollTop = 0;
			});
		}
	};

	const closeModal = (event) => {
		const modal = modalRef.current;
		if (modal && !modal.querySelector(".modal-box").contains(event.target)) {
			modal.close();
		}
	};

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
			<button onClick={openModal} className="p-0 rounded-2xl !shadow-2xl border-0 outline-hidden">
				<div className="mockup-browser bg-accent border-0">
					<div className="mockup-browser-toolbar gap-2 lg:gap-4 2xl:gap-6 3xl:gap-8 text-base-100">
						<div className="campo flex justify-start w-3/4 2xs:w-full 3xl:ml-10 xl:py-1 3xl:py-3">
							<div className="input !bg-neutral !flex !m-0 md:py-4 lg:py-5 xl:py-7 3xl:py-10 items-center text-xs w-11/12 3xs:!w-full 5xs:text-sm 4xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl">
								{projectURL}
							</div>
						</div>
					</div>
					<div className="bg-base-200 flex flex-col justify-center">
						<img src={projectPic} alt="" className="" />
					</div>
				</div>
			</button>
			<dialog id={modalId} ref={modalRef} className="modal">
				<div className="modal-box max-w-full 3xl:w-4/6 flex flex-col items-center p-3 md:p-6 lg:p-8 2xl:p-9 3xl:p-14 2xl:rounded-3xl bg-accent">
					<img src={projectPic} alt={`Imagem do Projeto ${title}`} className="rounded-md" />
					<h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl mt-4 3xl:mt-14 lg:my-6 xl:my-8 3xl:my-10">
						{title}
					</h2>
					<div className="mt-3">
						{Array.isArray(description) ? (
							description.map((paragraph, index) => (
								<p
									key={index}
									className="text-justify md:text-xl lg:text-2xl 2xl:text-4xl 3xl:text-5xl indent-7 lg:indent-9 2xl:indent-12 3xl:indent-20 md:leading-relaxed 2xl:leading-normal 3xl:leading-normal">
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
							<div className="flex flex-col items-center gap-4 w-full">
								<div className="w-full flex justify-center">
									<Link
										to={projectURL}
										target="_blank"
										className="btn botao w-3/5 md:w-2/5 lg:w-2/6 2xl:w-1/4 text-lg md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl lg:min-h-14 2xl:min-h-16 3xl:min-h-20 2xl:rounded-2xl bg-neutral text-base-100">
										Visitar Projeto
									</Link>
								</div>
								<button className="btn botao p-0 w-2/5 md:w-1/5 2xl:w-1/6 text-base md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl 3xl:min-h-16 2xl:my-3 3xl:mt-5 2xl:rounded-2xl bg-neutral text-base-100">
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
	projectPic: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default ProjectsBrowserMockUp;
