import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

function About() {
	return (
		<div className="container flex flex-col items-center w-full mx-10">
			<div className="info flex gap-4 sm:gap-6 md:gap-8 lg:gap-20 items-center">
				<div className="titulo-nome text-center flex flex-col items-center">
					<h1 className="text-4xl lg:text-5xl">Rodrigo Carvalho</h1>
					<h2 className="mt-4 text-3xl lg:text-4xl">Desenvolvedor Full Stack</h2>
				</div>
				<div className="avatar">
					<div className="w-32  rounded-2xl">
						<img src="src/assets/pics/componentPics/fotoperfil.png" />
					</div>
				</div>
			</div>

			<div className="divider w-9/12 self-center mt-14">
				<FaCode className="w-20" />
			</div>

			<div className="texto flex justify-center text-justify mt-8 mx-20">
				<div>
					<p className="flex justify-center text-2xl indent-8">
						Olá! Me chamo Rodrigo Carvalho 😁, sou de Brasília, Distrito Federal.
					</p>
					<br />
					<div className="text-xl indent-10 leading-8 mt-4">
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
			<div className="buttons mt-10 flex gap-10">
				{/* Open the modal using document.getElementById('ID').showModal() method */}
				<button className="btn" onClick={() => document.getElementById("my_modal_1").showModal()}>
					Veja meu currículo
				</button>

				<dialog id="my_modal_1" className="modal">
					<div className="mt-10 w-11/12 h-5/6 bg-zinc-700 flex flex-col items-center justify-center rounded-2xl">
						<iframe
							src="src/assets/docs/curriculo.pdf"
							className="border rounded-xl h-full w-11/12 mt-4"></iframe>
						<div className="w-full flex justify-center">
							<button
								className="btn w-40 text-lg my-4 mr-10 mb-0"
								onClick={() => document.getElementById("my_modal_1").close()}>
								Fechar
							</button>
						</div>

						<div className="modal-action"></div>
					</div>
				</dialog>

				<button className="btn btn-active btn-neutral">
					<Link to="/findme" className="btn btn-ghost btn-sm rounded-btn text-xl">
						Contato
					</Link>
				</button>
			</div>
		</div>
	);
}

export default About;
