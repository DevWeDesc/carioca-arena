import Navbar from "@/app/components/Navbar"
import Banner from "@/app/components/Banner"
import Scheduling from "@/app/components/Scheduling"
import Plans from "@/app/components/Plans"
import BannerImagens from "@/app/components/BannerImagens"
import AccordionFAQ from "@/app/components/AccordionFAQ"
import Footer from "@/app/components/Footer"
import ServicesAndMenu from "@/app/components/ServicesAndMenu"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <Banner/>
      <Scheduling/>
      <Plans/>
      <ServicesAndMenu />
      <BannerImagens />
      <AccordionFAQ />
      <Footer />
      
     
    </main>
  )
}
