import Navbar from "@/app/components/Navbar"
import Banner from "@/app/components/Banner"
import Scheduling from "@/app/components/Scheduling"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <Banner/>
      <Scheduling/>
      {/* https://jerosoler.github.io/css-svg-generator-waves/ */}
      <svg viewBox="0 0 1903 132" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(165, 156, 149, 1)" d="M 0 9 C 477 9 477 110 954 110 L 954 110 L 954 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(165, 156, 149, 1)" d="M 953 110 C 1428 110 1428 12 1903 12 L 1903 12 L 1903 0 L 953 0 Z" stroke-width="0"></path> </svg>

      
      
      
    </main>
  )
}
