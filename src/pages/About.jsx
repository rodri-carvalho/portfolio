import React from "react";

// TODO:
// Avatar

function About() {
	return (
		<div className="container flex flex-col items-center">
			<div className="info items-center justify-center gap-24 mx-auto">
				<div className="titulo-nome text-center">
					<h1 className="text-7xl">Rodrigo Carvalho</h1>
					<h2 className="mt-8 text-4xl">Desenvolvedor Full Stack</h2>
				</div>

				<div className="avatar">
					<div className="w-40 rounded-2xl">
						<img src="src/assets/pics/componentPics/fotoperfil.png" />
					</div>
				</div>
			</div>
			<div className="foto w-full"></div>

			<div className="texto flex justify-center text-justify mt-14 max-w-5xl">
				<div>
					<p className="flex justify-center">
						Olá! Me chamo Rodrigo Carvalho 😁, sou de Brasília, Distrito Federal.
					</p>
					<br />
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
						fazem acreditar no <strong>sonho de um futuro sólido na carreira de programador</strong>
						.
					</p>
					<br />
					<p>
						Estou muito feliz e mal posso esperar para mergulhar cada vez mais nessa nova jornada.
						Busco oportunidades na área e estou disponível para batermos um papo!
					</p>
				</div>
			</div>
			<div className="buttons mt-10 flex gap-10">
				<button className="cv-btn">Veja meu currículo</button>
				<button className="contato-btn">Entre em contato</button>
			</div>
		</div>
	);
}

export default About;
