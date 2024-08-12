import React from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

function About() {
	return (
		<div className="flex flex-col items-center w-full mt-5 2xl:gap-10 2xl:mt-20">
			<div className="info flex sm:gap-6 lg:gap-12 xl:gap-16 items-center mx-2">
				<div className="titulo-nome text-center flex flex-col items-center mx-4 xl:gap-3 3xl:gap-6">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
						Rodrigo Carvalho
					</h1>
					<h2 className="mt-2 lg:mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
						Desenvolvedor Full Stack
					</h2>
				</div>
				<div className="avatar">
					<div className="w-32 rounded-2xl lg:w-40  3xl:w-60">
						<img src="src/assets/pics/componentPics/fotoperfil.png" />
					</div>
				</div>
			</div>

			<div className="divider w-9/12 self-center mt-10">
				<FaCode className="w-20" />
			</div>

			<div className="texto flex justify-center text-justify mt-6 mx-7 lg:mx-16 2xl:mx-32">
				<div>
					<p className="flex justify-center text-lg sm:text-xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-center">
						Olá! Me chamo Rodrigo Carvalho 😁, sou de Brasília, Distrito Federal.
					</p>
					<br />
					<div className="text-lg xl:text-2xl 2xl:text-3xl 3xl:text-4xl indent-10 mt-4 sm:mt-2 sm:mx-4 leading-8 sm:leading-9 md:leading-8 lg:leading-10 2xl:leading-loose 3xl:leading-loose 2xl:mt-10 3xl:mt-20">
						<p>
							Sou um amante da tecnologia e de todo seu imenso potencial e, no ano de 2023, decidi
							profissionalizar essa paixão. Sou bacharel em direito pela Universidade de Brasília e
							minha carreira até então foi exercendo a profissão de advogado. Mas meu ímpeto de me
							tornar um programador sempre se fez presente e, recentemente, decidi realizar uma
							transição de carreira para a área da programação, a qual sei que me enquadro muito
							mais por estar fazendo o que realmente me intriga e atrai, e o que realmente gosto.
						</p>
						<br />
						<p>
							Meu objetivo inicial é ingressar na área de <strong>Desenvolvimento Web</strong>.
							Tenho me dedicado incansavelmente a aprender programação, com foco total no
							aperfeiçoamento dos conhecimentos, no âmbito do frontend, em{" "}
							<strong>Javascript</strong>/<strong>Typescript</strong> e <strong>React</strong>, bem
							como em frameworks como <strong>Express</strong> e <strong>Axios</strong>. Além diso,
							estou trabalhando no aprimoramento das minhas habilidades no <strong>Node.js</strong>{" "}
							para o ambiente do backend, trabalhando com bancos de dados relacionais (
							<strong>PostgreSQL</strong>) e não relacionais (<strong>MongoDB</strong>), abrangendo,
							assim, tanto o <i>client</i> como o <i>server side</i>, me capacitando, desta forma,
							no desenvolvimento <strong>Full Stack</strong>, apto a lidar com as mais diversas
							abordagens dos dois mundos de forma completa, competente e versátil, sempre aplicando
							um código limpo e semântico.
						</p>
						<br />
						<p>
							Grande <strong>entusiasta da tecnologia</strong> e dedicado a explorar as perspectivas
							futuras que ela nos trará; <strong>fluente na língua inglesa</strong>;{" "}
							<strong>curioso</strong> e <strong>empenhado</strong>; são algumas das qualidades que
							me fazem acreditar no{" "}
							<strong>sonho de um futuro sólido na carreira de programador</strong>.
						</p>
						<br />
						<p>
							Estou muito feliz e mal posso esperar para mergulhar cada vez mais nessa nova jornada.
							Busco oportunidades na área e estou disponível para{" "}
							{<Link to="/findme">batermos um papo</Link>}!
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center mt-7 xl:mt-8 w-full">
				<div className="buttons w-8/12 max-w-72 md:max-w-full lg:max-w-full xl:max-w-full md:w-4/6 lg:w-7/12 xl:w-6/12 flex flex-col md:flex-row md:justify-center md:gap-16 gap-5 py-2">
					<button className="botaoCurriculo btn btn-active btn-neutral text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl md:w-2/5 lg:w-3/5 lg:h-full flex items-center">
						<a onClick={() => document.getElementById("my_modal_1").showModal()}>
							Veja meu currículo
						</a>
					</button>

					<dialog id="my_modal_1" className="modal">
						<div className="mt-10 w-11/12 h-5/6 bg-zinc-700 flex flex-col items-center rounded-2xl">
							<iframe
								src="src/assets/docs/curriculo.pdf"
								className="border rounded-xl h-full w-11/12 mt-5"></iframe>
							<div className="flex mt-4">
								<button
									className="botaoCurriculo btn btn-active btn-neutral text-lg md:text-2xl md:h-full"
									onClick={() => document.getElementById("my_modal_1").close()}>
									Fechar
								</button>
							</div>

							<div className="modal-action"></div>
						</div>
					</dialog>

					<button className="botaoContato btn btn-active btn-neutral text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl md:w-2/5 lg:w-3/5 lg:h-full flex items-center">
						<Link to="/findme" className="">
							Entre em contato
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default About;
