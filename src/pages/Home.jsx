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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (!hasScrolled && window.scrollY > 125 && window.innerHeight < 1500) {
				setShowArrow(false);
				setHasScrolled(true);
			} else if (!hasScrolled && window.scrollY > 50 && window.innerHeight >= 1500) {
				setShowArrow(false);
				setHasScrolled(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [hasScrolled]);

	return (
		<>
			<div className="flex flex-col w-full relative mx-4 xxs:mt-5 xxs:mx-5 xs:mt-6 sm:mx-6 sm:-top-4 md:mx-10 xl:mx-20 2xl:mx- 4xl:mx-44">
				<div
					className="hero h-full rounded-badge"
					style={{
						backgroundImage: `url(${heroBg})`,
					}}>
					<div className="hero-overlay bg-opacity-75 bg-accent rounded-badge"></div>
					<div className="hero-content flex flex-col relative text-neutral-content text-center p-0 sm:my-14 lg:my-20 sm:mx-20 md:mx-8 2xl:mx-20 25xl:mx-40 3xl:mx-52 4xl:mx-80 25xl:max-w-full">
						<div className="flex flex-col items-center justify-center my-16 lg:my-14 sm:gap-4 4xl:gap-20 text-base-100">
							<h1 className="mb-5 text-3xl xs:text-4xl md:text-5xl xl:text-5xl 25xl:text-7xl 4xl:text-9xl font-bold mx-2 leading-snug md:leading-snug lg:leading-snug xl:leading-snug 2xl:leading-snug 25xl:leading-snug 3xl:leading-snug 4xl:leading-snug">
								Olá e bem-vindo(a) ao meu Portfólio!
							</h1>
							<h1 className="text-3xl xs:text-4xl md:text-5xl xl:text-5xl 25xl:text-7xl 4xl:text-9xl sm:text-nowrap">
								{tagSmile}
							</h1>
							<p className="mt-10 mb-5 mx-3 sm:mx-0 text-xl xs:text-2xl md:text-3xl xl:text-3xl 25xl:text-5xl 4xl:text-7xl text-center md::leading-normal lg:leading-normal xl:leading-normal 2xl:leading-normal 3xl:leading-normal 4xl:leading-normal">
								Aqui você vai encontrar todas as informações sobre mim, tecnologias que eu domino,
								minha formação acadêmica, projetos que já elaborei e como pode me contatar.
							</p>
						</div>
					</div>
					{showArrow && (
						<div className="arrowDiv w-full h-full flex justify-center items-end mt-8 4xl:mt-20">
							<img
								src={arrowDown}
								alt="Arrow Down"
								className="arrow md:w-32 md:h-24 lg:w-32 lg:h-20 25xl:w-44 25xl:h-32 4xl:w-56 4xl:h-40"
							/>
						</div>
					)}
				</div>

				<div className="w-full flex justify-center">
					<div className="divider w-10/12 2xl:w-8/12 self-center mt-12">
						<FaCode className="text-base-100 text-6xl lg:text-7xl" />
					</div>
				</div>

				<div className="flex flex-col xxs:mt-1">
					<div className="flex items-center justify-center">
						<h3 className="flex text-2xl text-center justify-center ml-4 xs:text-2xl lg:text-3xl 3xl:text-5xl text-base-100">
							Navegue pelas seções
						</h3>
						<PiArrowBendRightDown className="mt-8 h-12 md:h-10 md:pl-2 w-12 rotate-45 translate-y-4 md:translate-y-3 -translate-x-2 md:mx-2 xl:text-3xl 2xl:text-4xl 3xl:h-16 3xl:w-16 3xl:rotate-45 3xl:translate-y-6 text-base-100" />
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
