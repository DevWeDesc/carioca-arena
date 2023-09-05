import Navbar from "@/app/components/Navbar"
import Banner from "@/app/components/Banner"
import Scheduling from "@/app/components/Scheduling"
import Plans from "@/app/components/Plans"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <Banner/>
      <Scheduling/>
      <Plans/>
    </main>
  )
}
