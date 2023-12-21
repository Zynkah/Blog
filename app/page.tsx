import { ModeToggle } from "@/components/theme-button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
        <div className="sticky top-2 right-2"><ModeToggle /></div>
       
      </div>
    </main>
  )
}
