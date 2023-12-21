import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArticleData } from "@/data/ArticleData";

export default function ArticleCards() {
    return (
        <div>
      {ArticleData.article.map((article, index) => (
      <Card key={index} className="m-6">
        <CardHeader>
          <CardTitle>{article.title}</CardTitle>
          <CardDescription>{article.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{article.content}</p>
        </CardContent>
        <CardFooter>
          <p>{article.footer}</p>
        </CardFooter>
      </Card>))}
        </div>
    );
}