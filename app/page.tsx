import HomeCarousel from "@/components/carousel";
import { HomeCard } from "@/components/home-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="space-y-20 p-24">
        <HomeCard />
        <HomeCarousel />
      </div>
    </main>
  );
}
