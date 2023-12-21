import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectData } from "@/data/ProjectData";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCards() {
  return (
    <div className="items-center justify-center grid">
      {ProjectData.project.map((project, index) => (
        <Card key={index} className="m-6 md:w-[700px]">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src={project.image} height="500" width="700" alt="image" className="rounded" />
          </CardContent>
          <CardFooter>
            <Link href={project.link} className="m-auto hover:scale-110 hover:text-bold">{project.footer}</Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
