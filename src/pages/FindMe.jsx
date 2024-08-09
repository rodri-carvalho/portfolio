import contactInfo from "../assets/db/contact";
import ContactCard from "../components/general/ContactCard";

// TODO: copy button + toast confirm

function FindMe() {
	return (
		<div className="flex flex-col gap-4 w-full items-center">
			{contactInfo.map((contact, index) => (
				<ContactCard
					key={contact.id}
					title={contact.title}
					numberOrId={contact.numberOrId}
					iconId={contact.iconId}
					id={contact.id}
				/>
			))}
		</div>
	);
}

export default FindMe;
