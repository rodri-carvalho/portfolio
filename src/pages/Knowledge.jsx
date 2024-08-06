import React from "react";
import KnowledgeCard from "../components/general/KnowledgeCard";
import techItems from "../assets/db/knowledge";

function Knowledge() {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-3">
			{techItems.map(({ iconId, techId, inProgress, techList, modalRef }) => (
				<KnowledgeCard
					key={iconId}
					iconId={iconId}
					techId={techId}
					inProgress={inProgress}
					techList={techList}
					modalRef={modalRef}
				/>
			))}
		</div>
	);
}

export default Knowledge;
