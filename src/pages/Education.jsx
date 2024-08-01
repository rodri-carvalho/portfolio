import React from "react";
import EducationCard from "../components/general/EducationCard";
import CourseCard from "../components/general/CourseCard";
import education from "../assets/db/education";
import courses from "../assets/db/courses";

// TODO:  Daisy Modal

function Education() {
	return (
		<>
			<h2 className="flex justify-center text-3xl mb-8">Formação Acadêmica</h2>

			<div className="divider"></div>

			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 ml-4">
				{education.map((education) => (
					<EducationCard
						key={education.id}
						institution={education.institution}
						title={education.title}
						pic={education.pic}
					/>
				))}
			</div>

			<h2 className="flex justify-center text-3xl mb-8 mt-16">Cursos</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
		</>
	);
}

export default Education;
