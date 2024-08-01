import React, { useEffect, useState } from "react";
import SectionsCard from "../components/general/SectionsCard";
import sections from "../assets/db/sections";
import heroBg from "../assets/pics/componentPics/hero-bg.jpg";
import arrowDown from "../assets/pics/componentPics/white-arrow.png";
import { PiArrowBendRightDown } from "react-icons/pi";

const tagSmile = "<>  :  ) </>";

function Home() {
	const [showArrow, setShowArrow] = useState(true);
	const [hasScrolled, setHasScrolled] = useState(false);
	const [arrowClass, setArrowClass] = useState("mt-6");

	useEffect(() => {
		const handleScroll = () => {
			if (!hasScrolled && window.scrollY > 250) {
				setShowArrow(false);
				setHasScrolled(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [hasScrolled]);

	useEffect(() => {
		if (window.innerHeight > 0 && window.innerHeight <= 600) {
			setArrowClass("mt-6");
		} else if (window.innerHeight > 600 && window.innerHeight <= 700) {
			setArrowClass("mt-10");
		} else if (window.innerHeight > 700 && window.innerHeight <= 800) {
			setArrowClass("mt-24");
		} else if (window.innerHeight > 800 && window.innerHeight <= 900) {
			setArrowClass("mt-40");
		} else if (window.innerHeight > 900 && window.innerHeight <= 1000) {
			setArrowClass("mt-56");
		} else if (window.innerHeight > 1000 && window.innerHeight <= 1120) {
			setArrowClass("mt-72");
		} else if (window.innerHeight > 1100) {
			setArrowClass("mt-96");
		}
	}, []);

	return (
		<>
			<div className="flex flex-col relative">
				<div
					className="hero h-screen rounded-badge"
					style={{
						backgroundImage: `url(${heroBg})`,
					}}>
					<div className="hero-overlay bg-opacity-80 rounded-badge"></div>
					<div className="hero-content flex flex-col relative text-neutral-content text-center">
						<div className="flex flex-col items-center justify-center">
							<h1 className="mb-5 text-6xl font-bold">Olá e bem-vindo(a) ao meu Portfólio!</h1>
							<h1 className="text-6xl">{tagSmile}</h1>
							<p className="mt-10 mb-5 max-w-6xl text-3xl text-center">
								Aqui você vai encontrar todas as informações sobre mim, tecnologias que eu domino,
								minha formação acadêmica, projetos que já elaborei e como pode me contatar.
							</p>
						</div>
					</div>
				</div>

				{showArrow && (
					<div className={`arrowDiv w-full flex justify-center absolute top-1/3 ${arrowClass}`}>
						<img src={arrowDown} alt="Arrow Down" className="arrow mt-0 absolute " />
					</div>
				)}

				<div className="w-full flex justify-center">
					<div className="divider flex mt-10 w-7/12"></div>
				</div>

				<div className="flex flex-col w-full items-center">
					<div className="flex w-auto items-center">
						<h3 className="container w-full flex justify-center title text-4xl">
							Navegue pelas seções
						</h3>
						<PiArrowBendRightDown className="mt-8 ml-4 h-12 w-10" />
					</div>
					<div className="w-full flex justify-center mt-4"></div>

					<div className="secoes flex flex-col w-full items-center mt-4">
						{sections.map((section) => (
							<SectionsCard
								key={section.id}
								page={section.page}
								description={section.description}
								iconId={section.iconId}
								query={section.query}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
