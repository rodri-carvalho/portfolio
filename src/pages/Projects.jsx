import React, { useEffect, useRef, useState } from "react";
import ProjectsBrowserMockUp from "../components/general/ProjectsBrowserMockUp";
import MoreProjectsCard from "../components/general/MoreProjectsCard";
import projects from "../db/projects";
import moreProjects from "../db/moreProjects";
import { FaArrowDown } from "react-icons/fa";

function Projects() {
	const [isMoreProjects, setIsMoreProjects] = useState(false);
	const [visibleProjects, setVisibleProjects] = useState(6);

	const moreProjectsRef = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			const isClickOnScrollbar = event.clientX >= document.documentElement.clientWidth;

			const isClickOnThemeToggleButton = event.target.closest(".theme-toggle-button");
			const isClickInsideDropdown = event.target.closest(".dropdown");

			if (isClickOnScrollbar || isClickOnThemeToggleButton || isClickInsideDropdown) {
				return;
			}

			if (moreProjectsRef.current && !moreProjectsRef.current.contains(event.target)) {
				setIsMoreProjects(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const loadMoreProjects = () => {
		setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
	};

	return (
		<div className="flex flex-col w-full px-5 sm:px-9 md:px-10 lg:px-14 2xl:px-20 3xl:px-28 3xl:py-8 gap-3 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10 3xl:gap-16 2xs:grid 2xs:grid-cols-2 2xs:auto-rows-max 2xs:my-1 2xs:gap-y-4 2xs:gap-x-4 xs:my-6 xs:gap-y-12 xs:gap-x-6 sm:my-6 sm:gap-y-16 sm:gap-x-8 md:my-2 md:gap-y-6 md:gap-x-6 xl:my-4 2xl:my-6 3xl:my-2 3xl:gap-x-24  3xl:gap-y-16">
			{projects.map((project, index) => (
				<ProjectsBrowserMockUp
					key={project.id}
					id={project.id}
					projectPic={project.projectPic}
					title={project.title}
					projectURL={project.projectURL}
					repoURL={project.repoURL}
					description={project.description}
				/>
			))}

			<div
				ref={moreProjectsRef}
				className={`collapse collapse-plus bg-accent mt-1 !shadow-2xl col-span-2 ${
					isMoreProjects ? "collapse-open" : ""
				}`}>
				<div
					className={`${
						isMoreProjects
							? "collapse-title sm:my-4 xl:my-6 3xl:my-14 max-w-full w-full flex text-xl 2xs:text-2xl xs:text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-8xl pr-4 text-base-100 lg:pl-8 2xl:pl-10 3xl:pl-14 self-center"
							: "collapse-title sm:my-4 xl:my-6 3xl:my-14 max-w-full w-full flex text-xl 2xs:text-2xl xs:text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-8xl pr-4 text-base-100 lg:pl-8 2xl:pl-10 3xl:pl-14 self-center"
					}`}
					onClick={() => setIsMoreProjects(!isMoreProjects)}>
					Outros Projetos
				</div>

				<div
					className={`collapse-content xl:px-8 ${
						isMoreProjects ? "collapse-open 2xl:my-7 3xl:my-10" : ""
					}`}>
					<div className="grid 2xs:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-6 2xl:gap-8 3xl:gap-12">
						{moreProjects.slice(0, visibleProjects).map((project, index) => (
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

					{visibleProjects < moreProjects.length && (
						<div className="flex items-center justify-center mt-4">
							<button
								onClick={loadMoreProjects}
								className="botao flex flex-col items-center w-9/12 md:w-1/2 lg:w-5/12 2xl:w-3/12 text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl md:mt-3 2xl:mt-5 3xl:mt-6 md:rounded-xl 2xl:rounded-3xl 3xl:rounded-3xl text-base-100 outline-hidden border-0">
								Carregar mais
								<FaArrowDown className="mt-3 2xl:mt-5 3xl:mt-7 w-6 h-8 lg:w-7 lg:h-10 2xl:w-9 2xl:h-12 3xl:w-12 3xl:h-16" />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Projects;
