import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ContactCard() {
  return (
    <div className="items-center justify-center grid">
      <Card className="md:w-[400px] text-center">
        <CardHeader>
          <CardTitle>Contact Card</CardTitle>
          <CardDescription>You can reach me at these links:</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2">
          <Button asChild className="m-auto hover:scale-110 hover:text-bold">
            <Link
              href="https://www.linkedin.com/in/zena-creps-ba3631232/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Button>
          <Button asChild className="m-auto hover:scale-110 hover:text-bold">
            <Link href="https://github.com/Zynkah" target="_blank">
              GitHub
            </Link>
          </Button>
        </CardContent>
        <CardFooter className="justify-center">
          I look forward to hearing from you!
        </CardFooter>
      </Card>
    </div>
  );
}
