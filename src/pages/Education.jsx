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
		const handleClickOutside = (event) => {
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
			<div className="flex flex-col w-full justify-evenly mx-4 lg:mx-7 xl:mx-9">
				<div
					ref={formacaoAcademicaRef}
					className={`collapse collapse-plus border-base-300 bg-base-200 border  ${
						isFormacaoAcademicaOpen ? "collapse-open" : ""
					}`}>
					<div
						className="collapse-title flex justify-center text-xl sm:text-2xl xl:text-3xl pl-12"
						onClick={() => setIsFormacaoAcademicaOpen(!isFormacaoAcademicaOpen)}>
						Formação Acadêmica
					</div>
					<div className="collapse-content">
						<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ml-4">
							{education.map((acadCourse, index) => (
								<EducationCard
									key={index}
									index={index}
									institution={acadCourse.institution}
									title={acadCourse.title}
									date={acadCourse.date}
									pic={acadCourse.pic}
									certificate={acadCourse.certificate}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<div className="divider w-10/12 self-center">
						<FaCode className="w-20" />
					</div>
				</div>

				<div
					ref={formacaoTecnicaRef}
					className={`collapse collapse-plus border-base-300 bg-base-200 border ${
						isFormacaoTecnicaOpen ? "collapse-open" : ""
					}`}>
					<div
						className="collapse-title flex justify-center text-xl sm:text-2xl xl:text-3xl pl-12"
						onClick={() => setIsFormacaoTecnicaOpen(!isFormacaoTecnicaOpen)}>
						Formação Técnica
					</div>
					<div className="collapse-content">
						<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
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
