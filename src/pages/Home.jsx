import React, { useEffect, useState } from "react";
import SectionsCard from "../components/general/SectionsCard";
import sections from "../assets/db/sections";
import heroBg from "../assets/pics/componentPics/hero-bg.jpg";
import arrowDown from "../assets/pics/componentPics/white-arrow.png";
import { PiArrowBendRightDown } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";

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
			<div className="flex flex-col relative mx-4 sm:mx-6 sm:-top-4">
				<div
					className="hero h-full md:h-screen rounded-badge"
					style={{
						backgroundImage: `url(${heroBg})`,
					}}>
					<div className="hero-overlay bg-opacity-80 rounded-badge"></div>
					<div className="hero-content flex flex-col relative text-neutral-content text-center p-0 sm:mx-20 sm:my-20 md:mx-14">
						<div className="flex flex-col sm:gap-4 items-center justify-center my-20">
							<h1 className="mb-5 text-3xl md:text-4xl font-bold mx-2">
								Olá e bem-vindo(a) ao meu Portfólio!
							</h1>
							<h1 className="text-3xl md:text-4xl sm:text-nowrap">{tagSmile}</h1>
							<p className="mt-10 mb-5 mx-6 sm:mx-0 text-xl md:text-2xl text-center">
								Aqui você vai encontrar todas as informações sobre mim, tecnologias que eu domino,
								minha formação acadêmica, projetos que já elaborei e como pode me contatar.
							</p>
						</div>
					</div>
				</div>

				{showArrow && (
					<div className={`arrowDiv w-full flex justify-center absolute top-1/3 ${arrowClass}`}>
						<img
							src={arrowDown}
							alt="Arrow Down"
							className="arrow mt-6 absolute sm:mt-10 md:mt-4"
						/>
					</div>
				)}

				<div className="w-full flex justify-center">
					<div className="divider w-10/12 self-center mt-12">
						<FaCode className="w-20" />
					</div>
				</div>

				<div className="flex flex-col mt-4">
					<div className="flex items-center justify-center">
						<h3 className="flex text-2xl text-center justify-center ml-4">Navegue pelas seções</h3>
						<PiArrowBendRightDown className="mt-8 h-12 md:h-10 md:pl-2 w-12 rotate-45 translate-y-4 md:translate-y-3 -translate-x-2 md:mx-2" />
					</div>
					<div className="flex p-0 justify-center mt-4"></div>

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
