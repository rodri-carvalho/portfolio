import React, { useEffect, useState } from "react";
import SectionsCard from "../components/general/SectionsCard";
import sections from "../db/sections";
import heroBg from "/assets/pics/componentPics/hero-bg.jpg";
import { PiArrowBendRightDown } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";

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
			<div className="flex flex-col w-full relative mx-4 xs:mx-5 sm:mx-6 md:mx-10 lg:mx-44 2xl:mx-48 3xl:mx-64 4xs:mt-2 2xs:mt-3 md:mt-5 2xl:mt-7 3xl:mt-10 mb-4 2xs:mb-6 xl:mb-8 3xl:mb-16">
				<div
					className="hero h-full rounded-badge !shadow-2xl"
					style={{
						backgroundImage: `url(${heroBg})`,
					}}>
					<div className="hero-overlay bg-opacity-75 bg-accent rounded-badge"></div>
					<div className="hero-content flex flex-col xl:max-w-full relative text-neutral-content p-4 5xs:p-0">
						<div className="flex flex-col items-center justify-center text-base-100 mt-12 6xs:mt-14 5xs:mt-20 sm:mt-24 xl:mt-32 2xl:mt-36 3xl:mt-52">
							<h1 className="text-center font-bold text-3xl 5xs:text-4xl sm:text-5xl  xl:text-7xl 2xl:text-8xl 3xl:text-9xl leading-snug 4xs:mx-2">
								Olá e bem-vindo(a) ao meu Portfólio!
							</h1>
							<h1 className="mt-7 6xs:mt-8 5xs:mt-12 sm:mt-14 md:mt-20 xl:mt-24 2xl:mt-36 3xl:mt-48 text-4xl 5xs:text-5xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl">
								{tagSmile}
							</h1>
							<p className="text-balance sm:text-pretty text-center mx-1 5xs:mx-4 sm:mx-14 md:mx-20 xl:mx-36 2xl:mx-44 3xl:mx-96 mt-8 6xs:mt-10 5xs:mt-12 sm:mt-14 md:mt-20 2xl:mt-28 3xl:mt-40 mb-14 6xs:mb-16 5xs:mb-20 4xs:mb-24 md:mb-28 lg:mb-36 xl:mb-44 2xl:mb-48 3xl:mb-72 text-xl 4xs:text-2xl sm:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl md:leading-normal lg:leading-normal xl:leading-snug 2xl:leading-snug 3xl:leading-snug">
								Aqui você vai encontrar todas as informações sobre mim, tecnologias que eu domino,
								minha formação acadêmica, projetos que já elaborei e como pode me contatar.
							</p>
						</div>
					</div>
					{showArrow && (
						<div className="arrowDiv w-full h-full flex justify-center items-end mt-4 5xs:mt-6 2xs:mt-7 xs:mt-5 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 3xl:mt-16 2xs:hidden md:flex">
							<SlArrowDown
								alt="Arrow Down"
								className="arrow h-16 w-16 5xs:h-20 5xs:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-36 xl:w-36 2xl:h-40 2xl:w-40 3xl:h-48 3xl:w-48"
							/>
						</div>
					)}
				</div>

				<div className="w-full flex justify-center">
					<div className="divider w-10/12 2xs:w-8/12 md:w-7/12 2xl:w-8/12 self-center mt-10 6xs:mt-10 4xs:mt-12 2xs:mt-12 md:mt-20 lg:mt-16 2xl:mt-32 3xl:mt-36">
						<FaCode className="text-base-100 text-6xl sm:text-7xl xl:text-8xl 2xl:text-9xl 3xl:h-44 3xl:w-44" />
					</div>
				</div>

				<div className="flex flex-col mt-2 6xs:mt-3 5xs:mt-5 3xs:mt-6 2xs:mt-7 sm:mt-8 md:mt-14 lg:mt-10 2xl:mt-24 3xl:mt-28">
					<div className="flex items-center justify-center">
						<h3 className="flex text-2xl 2xs:text-3xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl text-center justify-center ml-6 6xs:ml-7 4xs:ml-9 3xs:ml-10 2xl:mt-4 text-base-100">
							Navegue pelas seções do Portfólio
						</h3>
						<PiArrowBendRightDown className="text-base-100 text-4xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl rotate-45 translate-y-9 6xs:translate-y-9 4xs:translate-y-9 3xs:translate-y-10 2xs:translate-y-8 md:translate-y-8 lg:translate-y-9 xl:translate-y-11 2xl:translate-y-16 3xl:translate-y-20 -translate-x-16 6xs:-translate-x-20 4xs:-translate-x-28 2xs:-translate-x-2" />
					</div>
					<div className="flex p-0 justify-center mt-4 xs:mt-5"></div>

					<div className="secoes flex flex-col w-full items-center mt-3 3xs:mt-4 2xs:mt-6 lg:mt-8 2xl:mt-14 3xl:mt-20 gap-2 2xs:gap-3 lg:gap-4 2xl:gap-5 3xl:gap-8">
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
