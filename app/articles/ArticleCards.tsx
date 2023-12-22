import { ArticleData } from "@/data/ArticleData";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function ArticleCards() {
  return (
    <div>
      {ArticleData.article.map((article, index) => (
        <Card key={index} className="m-10">
          <CardHeader>
            <CardTitle className="text-3xl">{article.title}</CardTitle>
            <Separator />
          </CardHeader>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="mx-6">
              <AccordionTrigger>
                <CardDescription className="text-lg text-slate-400 hover:scale-110">
                  {article.description}
                </CardDescription>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent>
                  <p>{article.content}</p>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <CardFooter>
            <Link href="" className="mt-4 text-xs text-slate-400 hover:scale-110">
              {article.footer}
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
