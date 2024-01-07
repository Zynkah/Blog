
import ContactCard from "./ContactCard";
import { ContactForm } from "./ContactForm";
import GuestbookEntries from "./GuestbookEntries";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Contact() {
  return (
    <div className="p-2">
      <div className="border w-max px-5 py-2 m-auto my-5 rounded hover:bg-slate-600 hover:scale-110">
        <Drawer>
          <DrawerTrigger>View My Contact Card</DrawerTrigger>
          <DrawerContent>
            <ContactCard />
          </DrawerContent>
        </Drawer>
      </div>
      <ContactForm />
      <GuestbookEntries />
    </div>
  );
}
