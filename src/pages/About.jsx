import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import fotoPerfil from "/assets/pics/componentPics/fotoperfil.png";
import curriculo from "/assets/docs/curriculo.pdf";

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleOutsideClick = (e) => {
		const modal = document.getElementById("my_modal_1");
		if (e.target === modal) {
			modal.close();
		}
	};

	return (
		<div className="flex items-center justify-center py-6 px-3 2xs:px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 bg-accent w-11/12 lg:w-10/12 rounded-xl !shadow-2xl sm:mt-3 2xl:mt-8 3xl:mt-10 mb-5 sm:mb-7">
			<div className="flex flex-col items-center w-full md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-12 3xl:mt-16 text-base-100">
				<div className="info flex 2xs:gap-8 sm:gap-12 md:gap-20 xl:gap-24 2xl:gap-28 3xl:gap-40 items-center mx-2">
					<div className="titulo-nome text-center flex flex-col items-center mx-4 2xs:gap-2 sm:gap-3 md:gap-4 2xl:gap-6 3xl:gap-8">
						<h1 className="text-3xl 4xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl">
							Rodrigo Carvalho
						</h1>
						<h2 className="mt-2 lg:mt-4 text-2xl 4xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl">
							Desenvolvedor Full Stack
						</h2>
					</div>

					<div className="avatar">
						<div className="rounded-2xl w-24 h-32 6xs:w-28 5xs:w-32 4xs:w-28 4xs:h-36 2xs:w-36  sm:h-40 md:w-40 md:h-44 lg:w-48 lg:h-52 xl:w-56 xl:h-60 2xl:w-64 2xl:h-72 3xl:w-80 3xl:h-96">
							<img src={fotoPerfil} />
						</div>
					</div>
				</div>

				<div className="divider w-10/12 xs:w-9/12 2xl:w-8/12 self-center my-7 sm:my-9 md:my-12 lg:my-14 2xl:my-20 3xl:my-24">
					<FaCode className="text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl" />
				</div>

				<div className="texto flex justify-center text-justify text-lg 3xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
					<div>
						<p className="text-center 4xs:leading-relaxed">
							Olá! Me chamo Rodrigo Carvalho 😁, sou de Brasília, Distrito Federal.
						</p>
						<br />
						<div className="indent-6 leading-normal 4xs:leading-relaxed">
							<p>
								Sou um amante da tecnologia e de todo seu imenso potencial e, no ano de 2023, decidi
								profissionalizar essa paixão. Sou bacharel em direito pela Universidade de Brasília
								e minha carreira até então foi exercendo a profissão de advogado. Mas meu ímpeto de
								me tornar um programador sempre se fez presente e, recentemente, decidi realizar uma
								transição de carreira para a área da programação, a qual sei que me enquadro muito
								mais por estar fazendo o que realmente me intriga e atrai, e o que realmente gosto.
							</p>
							<br />
							<p>
								Meu objetivo inicial é ingressar na área de <strong>Desenvolvimento Web</strong>.
								Tenho me dedicado incansavelmente a aprender programação, com foco total no
								aperfeiçoamento dos conhecimentos, no âmbito do frontend, em{" "}
								<strong>Javascript</strong>/<strong>Typescript</strong> e <strong>React</strong>,
								bem como em frameworks como <strong>Express</strong> e <strong>Axios</strong>. Além
								diso, estou trabalhando no aprimoramento das minhas habilidades no{" "}
								<strong>Node.js</strong> para o ambiente do backend, trabalhando com bancos de dados
								relacionais (<strong>PostgreSQL</strong>) e não relacionais (
								<strong>MongoDB</strong>), abrangendo, assim, tanto o <i>client</i> como o{" "}
								<i>server side</i>, me capacitando, desta forma, no desenvolvimento{" "}
								<strong>Full Stack</strong>, apto a lidar com as mais diversas abordagens dos dois
								mundos de forma completa, competente e versátil, sempre aplicando um código limpo e
								semântico.
							</p>
							<br />
							<p>
								Grande <strong>entusiasta da tecnologia</strong> e dedicado a explorar as
								perspectivas futuras que ela nos trará; <strong>fluente na língua inglesa</strong>;{" "}
								<strong>curioso</strong> e <strong>empenhado</strong>; são algumas das qualidades
								que me fazem acreditar no{" "}
								<strong>sonho de um futuro sólido na carreira de programador</strong>.
							</p>
							<br />
							<p>
								Estou muito feliz e mal posso esperar para mergulhar cada vez mais nessa nova
								jornada. Busco oportunidades na área e estou disponível para{" "}
								{
									<Link to="/findme" className="text-base-100">
										batermos um papo
									</Link>
								}
								!
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full items-center mt-5 sm:mt-8 xl:mt-10 lg:mt-10 2xl:mt-14 3xl:mt-20 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 3xl:mb-16">
					<div className="buttons  flex flex-col justify-center 2xs:flex-row gap-5 2xs:gap-10 lg:gap-24 2xl:gap-28 py-2 w-9/12 2xs:w-11/12">
						<button
							className="botao !shadow-2xl !bg-neutral text-xl 3xs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl md:w-2/5 lg:w-2/5 xl:w-1/3 lg:h-full flex items-center justify-center 2xl:rounded-2xl outline-hidden px-1 2xs:px-5 py-4 lg:py-6 2xl:py-9 3xl:py-12 hover:!text-hoverYellow"
							onClick={() => document.getElementById("my_modal_1").showModal()}>
							Veja meu currículo
						</button>

						<dialog id="my_modal_1" className="modal !shadow-2xl" onClick={handleOutsideClick}>
							<div className="w-11/12 md:w-9/12 h-5/6 bg-accent flex flex-col items-center rounded-2xl !shadow-2xl">
								<iframe
									src={curriculo}
									className="curriculo rounded-2xl 2xs:rounded-3xl h-full w-full px-2 2xs:px-4 lg:px-6 xl:px-8 2xl:px-10  3xl:px-16 lg:pt-2 xl:pt-3 2xl:pt-4 3xl:pt-6 mt-3 border-0"></iframe>
								<div className="flex my-4 6xs:my-3 3xs:my-4 2xs:my-5 md:my-3 lg:my-5 2xl:my-7 3xl:my-10">
									<button
										className="botao xl:rounded-xl md:h-full text-base-100 !bg-neutral outline-hidden !shadow-2xl text-lg 6xs:text-xl 3xs:text-2xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl xs:py-3 sm:py-2 lg:py-3 xl:py-4 3xl:py-7 w-full h-full flex justify-center items-center"
										onClick={() => document.getElementById("my_modal_1").close()}>
										Fechar
									</button>
								</div>
							</div>
						</dialog>

						<button
							className="botao !bg-neutral text-xl 3xs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-7xl md:w-2/5 lg:w-2/5 xl:w-1/3 lg:h-full flex items-center justify-center 2xl:rounded-2xl outline-hidden px-1 2xs:px-6 py-4 lg:py-6 2xl:py-9 3xl:py-12 !shadow-2xl hover:!text-hoverYellow"
							onClick={() => (window.location.href = "/findme")}>
							Entre em contato
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
