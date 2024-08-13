import ProjectsBrowserMockUp from "../components/general/ProjectsBrowserMockUp";
import MoreProjectsCard from "../components/general/MoreProjectsCard";
import projects from "../assets/db/projects";
import moreProjects from "../assets/db/projects";
import { useEffect, useRef, useState } from "react";
import arrowDown from "../assets/pics/componentPics/white-arrow.png";

function Projects() {
	const [showArrow, setShowArrow] = useState(true);
	const [hasScrolled, setHasScrolled] = useState(false);
	const [isMoreProjects, setIsMoreProjects] = useState(false);

	const moreProjectsRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (moreProjectsRef.current && !moreProjectsRef.current.contains(event.target)) {
				setIsMoreProjects(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (!hasScrolled && window.scrollY > 100) {
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
		<div className="flex flex-col w-full px-3 sm:px-5 md:px-7 lg:px-9 gap-3 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9">
			{projects.map((project, index) => (
				<ProjectsBrowserMockUp
					key={project.id}
					id={project.id}
					projectPic={project.projectPic}
					title={project.title}
					projectURL={project.projectURL}
					description={project.description}
				/>
			))}

			{showArrow && (
				<div className="arrowDiv absolute">
					<img
						src={arrowDown}
						alt="Arrow Down"
						className="arrow hidden 2xl:flex 2xl:h-44 2xl:w-56"
					/>
				</div>
			)}

			{/* ************NOVA SECAO OUTROS PROJETOS********************** */}

			<div
				ref={moreProjectsRef}
				className={`collapse collapse-plus border-base-300 bg-base-200 border xl:pr-4  2xl:w-11/12 3xl:pr-8 ${
					isMoreProjects ? "collapse-open" : ""
				}`}>
				<div
					className={` ${
						isMoreProjects
							? "collapse-title flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-6xl pl-12 3xl:pt-10"
							: "collapse-title flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-6xl pl-12"
					}`}
					onClick={() => setIsMoreProjects(!isMoreProjects)}>
					Outros Projetos
				</div>
				<div
					className={`collapse-content 3xl:pr-12 3xl:pl-0 ${
						isMoreProjects ? "collapse-open 2xl:mt-7 3xl:mt-10" : ""
					}`}>
					<div className="grid md:grid-cols-2 lg:grid-cols-2 2xl:m-0 2xl:place-content-between 3xl:grid-cols-2 gap-6 3xl:gap-14 3xl:px-10 3xl:pb-10">
						{moreProjects.map((project, index) => (
							<MoreProjectsCard
								key={project.id}
								id={project.id}
								projectPic={project.projectPic}
								title={project.title}
								projectURL={project.projectURL}
								description={project.description}
							/>
						))}
					</div>
				</div>
			</div>

			{/* ************NOVA SECAO OUTROS PROJETOS********************** */}
		</div>
	);
}

export default Projects;
