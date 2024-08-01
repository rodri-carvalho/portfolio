import React from "react";
import { FaInfo, FaGraduationCap, FaCode, FaFolderOpen } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

function FaIconInfo() {
	return <FaInfo />;
}
function FaIconKnow() {
	return <FaCode />;
}
function FaIconEduc() {
	return <FaGraduationCap />;
}
function FaIconProjects() {
	return <FaFolderOpen />;
}
function FaIconContact() {
	return <RiContactsFill />;
}

export { FaIconInfo, FaIconKnow, FaIconEduc, FaIconProjects, FaIconContact };
