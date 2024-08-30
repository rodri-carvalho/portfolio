import React, { useEffect, useRef, useState } from "react";
import ProjectsBrowserMockUp from "../components/general/ProjectsBrowserMockUp";
import MoreProjectsCard from "../components/general/MoreProjectsCard";
import projects from "../assets/db/projects";
import moreProjects from "../assets/db/moreProjects";
import { FaArrowDown } from "react-icons/fa";

function Projects() {
	const [isMoreProjects, setIsMoreProjects] = useState(false);
	const [visibleProjects, setVisibleProjects] = useState(6);

	const moreProjectsRef = useRef(null);

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
		<div className="flex flex-col w-full px-5 sm:px-9 md:px-10 lg:px-14 2xl:px-60 3xl:px-72 4xl:px-80 3xl:py-8 gap-3 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10 25xl:gap-12 3xl:gap-16 4xl:gap-20">
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

			<div
				ref={moreProjectsRef}
				className={`collapse collapse-plus border-base-300 bg-base-200 border mt-5 ${
					isMoreProjects ? "collapse-open" : ""
				}`}>
				<div
					className={`${
						isMoreProjects
							? "collapse-title max-w-full w-full xl:w-11/12 flex text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-6xl pr-4 xxs:ml-2 xs:ml-0 2xl:ml-16 3xl:ml-24 4xl:ml-32 lg:mt-4 2xl:mt-6 3xl:mt-8 4xl:mt-10 md:mb-2 lg:mb-8"
							: "collapse-title max-w-full w-full xl:w-11/12 flex text-xl sm:text-2xl md:text-3xl lg:text-3xl 3xl:text-6xl pr-4 xxs:ml-2 xs:ml-0 2xl:ml-16 3xl:ml-24 4xl:ml-32 lg:my-4 2xl:my-6 3xl:my-8 4xl:my-10"
					}`}
					onClick={() => setIsMoreProjects(!isMoreProjects)}>
					Outros Projetos
				</div>

				<div
					className={`collapse-content xl:px-8 ${
						isMoreProjects ? "collapse-open 2xl:my-7 3xl:my-10" : ""
					}`}>
					<div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6 2xl:gap-8 3xl:gap-12">
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
								className="btn-ghost flex flex-col items-center w-9/12 md:w-1/2 lg:w-5/12 2xl:w-3/12 4xl:w-2/12 text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl md:mt-3 2xl:mt-5 3xl:mt-6 4xl:mt-8   md:rounded-xl 2xl:rounded-3xl 3xl:rounded-3xl">
								Carregar mais
								<FaArrowDown className="mt-3 2xl:mt-5 3xl:mt-7 4xl:mt-10 w-6 h-8 lg:w-7 lg:h-10 2xl:w-9 2xl:h-12 3xl:w-12 3xl:h-16 4xl:w-14 4xl:h-24" />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Projects;
