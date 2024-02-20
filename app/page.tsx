import HomeCarousel from "@/components/carousel";
import { HomeCard } from "@/components/home-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="space-y-20"> 
      <HomeCard />  
      <HomeCarousel />
      </div>
    </main>
  )
}
