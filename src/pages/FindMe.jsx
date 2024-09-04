import { useEffect } from "react";
import contactInfo from "../assets/db/contact";
import ContactCard from "../components/general/ContactCard";

function FindMe() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex flex-col gap-4 w-full items-center justify-center 4xl:my-8 lg:grid lg:grid-cols-2 place-items-center lg:gap-1">
			{contactInfo.map((contact, index) => (
				<ContactCard
					key={contact.id}
					title={contact.title}
					numberOrId={contact.numberOrId}
					iconId={contact.iconId}
					id={contact.id}
					href={contact.href}
				/>
			))}
		</div>
	);
}

export default FindMe;

// 2xl:grid 2xl:grid-cols-2 2xl:mx-auto 2xl:gap-x-0
