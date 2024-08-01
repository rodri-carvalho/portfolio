import React from "react";

// TODO:
// Avatar

function About() {
	return (
		<div className="container">
			<div className="info flex items-center justify-around">
				<div className="titulo-nome text-center">
					<h1 className="text-7xl">Rodrigo Carvalho</h1>
					<h2 className="mt-8 text-4xl">Desenvolvedor Full Stack</h2>
				</div>

				<div className="foto right-0">
					<img
						className="rounded-full h-48 w-48 mx-auto right-0"
						src="src/assets/pics/fotoperfil.png"
						alt="foto de perfil"
					/>
				</div>
			</div>
			<div className="foto w-full"></div>

			<div className="texto text-justify mt-10">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, possimus repellendus
					error excepturi molestias reiciendis nostrum ipsam dolorum quam quo tenetur vero, suscipit
					saepe assumenda incidunt reprehenderit modi necessitatibus fugiat sequi. Id libero
					impedit, doloribus dignissimos laudantium veniam nam beatae eos dolorum ullam rem,
					reprehenderit, numquam voluptatum enim. Ipsa assumenda sequi ipsum nostrum adipisci itaque
					dicta, ex libero, iusto aliquid dolor fugiat delectus ullam? Ipsum iusto eveniet inventore
					ullam debitis modi eligendi illo, voluptate excepturi ut. Voluptate aspernatur culpa in
					repellendus vel, perferendis unde fugiat, consectetur maxime odit ducimus optio voluptatem
					ea eligendi, possimus blanditiis doloribus expedita et nam minus quia iure facere esse?
					Libero quidem deserunt ipsam ipsa esse quis laudantium nisi quisquam blanditiis, possimus
					nesciunt adipisci expedita reiciendis, illo soluta qui saepe, repellat nobis beatae! Ullam
					omnis unde tenetur fugiat, esse ut sapiente exercitationem eius consequatur aut
					perferendis, vero sint repellendus dicta saepe facilis ipsa alias cumque fuga harum
					ducimus reiciendis! Doloribus quasi voluptatibus saepe eum harum. Totam temporibus vel
					explicabo fuga amet sed et. Reprehenderit adipisci cumque praesentium. Illo est ex
					nesciunt sit iusto asperiores voluptatum natus, sed, minus cum nostrum inventore sint et
					harum? Dignissimos tempore tempora assumenda ipsum explicabo reiciendis. Enim sint quaerat
					minima id. Iste quae, sunt laboriosam officiis quo enim eum veniam ipsa sint sapiente
					molestiae inventore vero aut! Nobis, sint quam! Ipsam culpa facere dolorem officia omnis
					amet odio, odit enim sapiente? Quisquam consequatur, est asperiores ipsam commodi
					laudantium voluptate mollitia esse praesentium enim alias aliquid laborum! Quis minima
					molestias a. Hic error minus id voluptatem odio neque nulla laborum, omnis labore.
				</p>
			</div>
			<div className="buttons">
				<button className="cv-btn">Veja meu currículo</button>
				<button className="contato-btn">Entre me contato</button>
			</div>
		</div>
	);
}

export default About;
