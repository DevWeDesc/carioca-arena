'use client'
import Navbar from "@/app/components/Navbar"
import Banner from "@/app/components/Banner"
import Scheduling from "@/app/components/Scheduling"
import Plans from "@/app/components/Plans"
import BannerImagens from "@/app/components/BannerImagens"
import AccordionFAQ from "@/app/components/AccordionFAQ"
import Footer from "@/app/components/Footer"
import ServicesAndMenu from "@/app/components/ServicesAndMenu"
import { useEffect, useState } from "react"

export default function Home() {

  const [isTrue, setIsTrue] = useState(true)
  const [isMenuClicked, setIsMenuClicked] = useState(false)
 
 
 
  useEffect(() => {
 
   async function checkIsMobile() {
     setIsTrue(window.innerWidth <= 768); 
   }
 
   window.addEventListener("resize", checkIsMobile);
 
   checkIsMobile();
 
   return () => {
     window.removeEventListener("resize", checkIsMobile);
   };
 }, []);
 
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar 
        isTrue={isTrue} 
        isMenuClicked={isMenuClicked} 
        setIsMenuClicked={setIsMenuClicked}  
      />
      <Banner/>
      <Scheduling/>
      <Plans/>
      <ServicesAndMenu />
      <BannerImagens isTrue={isTrue} />
      <AccordionFAQ />
      <Footer />
    </main>
  )
}
