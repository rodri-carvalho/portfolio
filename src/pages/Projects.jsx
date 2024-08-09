import ProjectsBrowserMockUp from "../components/general/ProjectsBrowserMockUp";
import projects from "../assets/db/projects";
import { useEffect, useState } from "react";
import arrowDown from "../assets/pics/componentPics/white-arrow.png";

function Projects() {
	const [showArrow, setShowArrow] = useState(true);
	const [hasScrolled, setHasScrolled] = useState(false);

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
		</div>
	);
}

export default Projects;
