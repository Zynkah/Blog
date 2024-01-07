import ContactCard from "./ContactCard";
import { ContactForm } from "./ContactForm";
import GuestbookEntries from "./GuestbookEntries";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Contact() {
  return (
    <div className="p-2">
      <div className="border w-max px-5 py-2 m-auto my-5 rounded hover:bg-slate-600 hover:scale-110">
        <Dialog>
          <DialogTrigger>View My Contact Card</DialogTrigger>
          <DialogContent>
            <ContactCard />
          </DialogContent>
        </Dialog>
      </div>
      <ContactForm />
      <GuestbookEntries />
    </div>
  );
}
