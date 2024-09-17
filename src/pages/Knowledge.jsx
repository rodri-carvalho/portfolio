import React, { useEffect } from "react";
import KnowledgeCard from "../components/general/KnowledgeCard";
import techItems from "../../public/assets/db/knowledge";

function Knowledge() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="w-full grid grid-cols-2 2xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 3xl:grid-cols-6 gap-3 sm:gap-y-5 sm:gap-x-6 md:gap-y-3 md:gap-x-5 lg:gap-y-5 lg:gap-x-7 2xl:gap-y-6 2xl:gap-x-8 3xl:gap-y-10 3xl:gap-x-12 mx-3 md:mx-5 mb-1 mt-1 sm:mb-4 md:mb-3 sm:mt-2 md:mt-2 xl:mb-7 xl:mt-5 lg:mx-8 xl:mx-10 2xl:mx-9 3xl:mx-24 2xl:mb-8 3xl:mt-10 3xl:mb-12">
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
