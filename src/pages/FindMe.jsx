import { useEffect } from "react";
import contactInfo from "../assets/db/contact";
import ContactCard from "../components/general/ContactCard";

function FindMe() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="flex flex-col gap-4 md:gap-x-10 md:gap-y-1 lg:gap-y-10 w-full items-center justify-center md:grid md:grid-cols-3 lg:grid-cols-3 md:place-items-center md:mx-16 lg:my-32">
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
