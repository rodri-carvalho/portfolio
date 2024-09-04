import React, { useEffect, useRef, useState } from "react";
import EducationCard from "../components/general/EducationCard";
import CourseCard from "../components/general/CourseCard";
import education from "../assets/db/education";
import courses from "../assets/db/courses";
import { FaCode } from "react-icons/fa6";

function Education() {
	const [isFormacaoAcademicaOpen, setIsFormacaoAcademicaOpen] = useState(false);
	const [isFormacaoTecnicaOpen, setIsFormacaoTecnicaOpen] = useState(true);

	const formacaoAcademicaRef = useRef(null);
	const formacaoTecnicaRef = useRef(null);

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

			if (formacaoAcademicaRef.current && !formacaoAcademicaRef.current.contains(event.target)) {
				setIsFormacaoAcademicaOpen(false);
			}
			if (formacaoTecnicaRef.current && !formacaoTecnicaRef.current.contains(event.target)) {
				setIsFormacaoTecnicaOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<div className="flex flex-col w-full justify-evenly items-center mx-4 lg:mx-7 xl:mx-9">
				<div
					ref={formacaoAcademicaRef}
					className={`collapse collapse-plus bg-accent pr-1 xl:pr-4 2xl:w-11/12 4xl:w-10/12 3xl:pr-8 ${
						isFormacaoAcademicaOpen ? "collapse-open" : ""
					}`}>
					<div
						className={` ${
							isFormacaoAcademicaOpen
								? "collapse-title flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-6xl pl-12 text-base-100 3xl:pt-10"
								: "collapse-title flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-6xl pl-12 text-base-100"
						}`}
						onClick={() => setIsFormacaoAcademicaOpen(!isFormacaoAcademicaOpen)}>
						Formação Acadêmica
					</div>
					<div
						className={`collapse-content 3xl:pr-12 3xl:pl-0 ${
							isFormacaoAcademicaOpen ? "collapse-open 2xl:mt-7 3xl:mt-10" : ""
						}`}>
						<div className="grid md:grid-cols-2 lg:grid-cols-2 2xl:m-0 2xl:place-content-between 3xl:grid-cols-2 gap-6 3xl:gap-14 3xl:px-10 3xl:pb-10">
							{education.map((acadCourse, index) => (
								<EducationCard
									key={index}
									index={index}
									institution={acadCourse.institution}
									title={acadCourse.title}
									date={acadCourse.date}
									pic={acadCourse.pic}
									certificate={acadCourse.certificate}
									content={acadCourse.institution}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<div className="divider w-10/12 2xl:w-9/12 2xl:h-10 self-center text-base-100">
						<FaCode className="w-20 2xl:w-20 2xl:h-20 2xl:mx-8" />
					</div>
				</div>

				<div
					ref={formacaoTecnicaRef}
					className={`collapse collapse-plus bg-accent pr-1 xl:pr-4 2xl:w-11/12 4xl:w-10/12 3xl:pr-10  ${
						isFormacaoTecnicaOpen ? "collapse-open" : ""
					}`}>
					<div
						className="collapse-title flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl 3xl:text-6xl pl-12"
						onClick={() => setIsFormacaoTecnicaOpen(!isFormacaoTecnicaOpen)}>
						Formação Técnica
					</div>
					<div
						className={`collapse-content ${
							isFormacaoTecnicaOpen ? "collapse-open 2xl:mt-7 3xl:mt-10" : ""
						}`}>
						<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-3 gap-4 sm:gap-6 4xl:max-w-full 4xl:gap-y-10">
							{courses.map((course) => (
								<CourseCard
									key={course.id}
									title={course.title}
									subtitle={course.subtitle}
									description={course.description}
									learned={course.learned}
									pic={course.pic}
									inProgress={course.inProgress}
									certificate={course.certificate}
									certificate2={course.certificate2}
									uniqueCertificate={course.uniqueCertificate}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Education;
