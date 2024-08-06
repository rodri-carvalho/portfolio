import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

function About() {
	return (
		<div className="flex flex-col items-center w-full">
			<div className="info flex sm:gap-6 lg:gap-12 xl:gap-16 items-center mx-2">
				<div className="titulo-nome text-center flex flex-col items-center mx-4">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl">Rodrigo Carvalho</h1>
					<h2 className="mt-2 lg:mt-4 text-2xl sm:text-3xl lg:text-4xl">
						Desenvolvedor Full Stack
					</h2>
				</div>
				<div className="avatar">
					<div className="w-32 rounded-2xl">
						<img src="src/assets/pics/componentPics/fotoperfil.png" />
					</div>
				</div>
			</div>

			<div className="divider w-9/12 self-center mt-10">
				<FaCode className="w-20" />
			</div>

			<div className="texto flex justify-center text-justify mt-6 mx-6 lg:mx-9">
				<div>
					<p className="flex justify-center text-lg sm:text-xl xl:text-2xl text-center">
						Olá! Me chamo Rodrigo Carvalho 😁, sou de Brasília, Distrito Federal.
					</p>
					<br />
					<div className="text-lg xl:text-xl indent-10 leading-8 mt-4 sm:mt-2 sm:mx-4">
						<p>
							Sou um amante da tecnologia e de todo seu potencial e no ano de 2023 decidi
							profissionalizar essa paixão. Sou bacharel em direito e minha carreira até agora foi
							exercendo a profissão de advogado, porém, decidi realizar a uma transição de carreira
							para a programação.
						</p>
						<br />

						<p>
							Meu objetivo é ingressar na área de <strong>Desenvolvimento Web</strong>. Tenho me
							dedicado incansavelmente a aprender programação, com foco total no aperfeiçoamento dos
							conhecimentos em <strong>Javascript</strong>/<strong>Typescript</strong> e{" "}
							<strong>React</strong>, <strong>Express</strong> e <strong>Axios</strong>, bem como o
							aprimoramento do uso de <strong>Node.js</strong> para o ambiente do backend e{" "}
							<strong>PostgreSQL</strong>/<strong>MongoDB</strong>, abrangendo, assim, o client e o
							server side e me capacitando no desenvolvimento <strong>Full Stack</strong>, apto a
							lidar com as mais diversas abordagens dos dois mundos de forma completa, competente e
							versátil, aplicando um código limpo e semântico.
						</p>
						<br />
						<p>
							Grande <strong>entusiasta da tecnologia</strong> e dedicado a explorar as perspectivas
							futuras que ela nos trará; <strong>fluente na língua inglesa</strong>;{" "}
							<strong>curioso</strong> e <strong>empenhado</strong>; algumas das qualidades que me
							fazem acreditar no{" "}
							<strong>sonho de um futuro sólido na carreira de programador</strong>.
						</p>
						<br />
						<p>
							Estou muito feliz e mal posso esperar para mergulhar cada vez mais nessa nova jornada.
							Busco oportunidades na área e estou disponível para batermos um papo!
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center mt-7 w-full">
				<div className="buttons w-8/12 max-w-72 md:max-w-full lg:max-w-full xl:max-w-full md:w-4/6 lg:w-7/12 xl:w-6/12 flex flex-col md:flex-row md:justify-center md:gap-16 gap-5 py-2">
					{/* Open the modal using document.getElementById('ID').showModal() method */}
					<button
						className="btn btn-active btn-neutral text-lg md:w-2/5"
						onClick={() => document.getElementById("my_modal_1").showModal()}>
						Veja meu currículo
					</button>

					<dialog id="my_modal_1" className="modal">
						<div className="mt-10 w-11/12 h-5/6 bg-zinc-700 flex flex-col items-center rounded-2xl">
							<iframe
								src="src/assets/docs/curriculo.pdf"
								className="border rounded-xl h-full w-11/12 mt-5"></iframe>
							<div className="flex mt-4">
								<button
									className="btn w-40 flex text-lg h-full"
									onClick={() => document.getElementById("my_modal_1").close()}>
									Fechar
								</button>
							</div>

							<div className="modal-action"></div>
						</div>
					</dialog>

					<button className="btn btn-active btn-neutral md:w-2/6">
						<Link to="/findme" className="btn btn-ghost btn-sm rounded-btn text-lg">
							Contato
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default About;
