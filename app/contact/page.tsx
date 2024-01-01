import ContactCard from "./ContactCard";
import { ContactForm } from "./ContactForm";
import GuestbookEntries from "./GuestbookEntries";

export default function Contact() {
    return (
        <div className="p-2">
        <ContactCard/>
        <ContactForm />
        <GuestbookEntries />
        </div>
    )
}