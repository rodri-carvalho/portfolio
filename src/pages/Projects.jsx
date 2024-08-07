import ProjectsBrowserMockUp from "../components/general/ProjectsBrowserMockUp";
import projects from "../assets/db/projects";

// TODO:
// Link
// Browser!!!!!!!! or window

function Projects() {
	return (
		<div className="flex flex-col w-full px-3 sm:px-5 md:px-6 lg:px-7 gap-3 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9">
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
		</div>
	);
}

export default Projects;
