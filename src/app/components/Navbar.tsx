'use client'
import React, { useEffect, useState } from "react"

export default function Navbar() {
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
    <nav>
      <div className="bg-[url('/fundo-bg.jpg')] h-32 bg-cover bg-center lg:h-60" />

      {
        isTrue ?
        <>        
        <nav className="h-14 bg-white w-full drop-shadow-lg flex items-center justify-center">
          <div className="border p-2 flex ">
            <div className="burger-menu h-6 flex flex-col items-start justify-between cursor-pointer" onClick={ ()=> setIsMenuClicked(!isMenuClicked)} >
              <div className={`burger-bar w-6 h-0.5 rounded bg-gray-800 transform $  {isMenuClicked ? "rotate-45 translate-x-0 translate-y-[9px]" : ""}`}></div>
              <div className={`burger-bar w-6 h-0.5 rounded bg-gray-800 transform $  {isMenuClicked ? "-rotate-45 -translate-x-0 -translate-y-[2px]" : ""}`}></div>
              <div className={`burger-bar w-6 h-0.5 rounded bg-gray-800 transform $  {isMenuClicked ? "scale-0" : ""}`}></div>
            </div>
          </div>
        </nav>
        <div className={`menu w-screen left-0 h-full bg-black opacity-90 z-40 fixed top-3 drop-shadow-md ${isMenuClicked ? "mt-[10.6rem]" : "hidden"} `}>
          <div className="h-[74%] flex flex-col items-center justify-center gap-6 text-white text-sm font-semibold uppercase ">
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b " href="/" >Inicio</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" href="/sobre" >Locação de Quadras</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" href="/tecnologias" >Serviços</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" href="/projetos" >Cardapio</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" href="/projetos" >Shows e Eventos</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" href="https://api.whatsapp.com/send?phone=5511933407606" target="_blank">Contato</a>
          </div>
        </div>
      </> 
      :
        <div className="flex items-center justify-center gap-10  text-sm lg:text-lg font-semibold p-4 drop-shadow-lg border-b uppercase">
          <a className="hover:text-color-yellow-custom cursor-pointer" href="/" >Inicio</a>
          <a className="hover:text-color-yellow-custom cursor-pointer" href="/sobre" >Locação de Quadras</a>
          <a className="hover:text-color-yellow-custom cursor-pointer" href="/sobre" >Serviços</a>
          <a className="hover:text-color-yellow-custom cursor-pointer" href="/projetos" >Cardapio</a>
          <a className="hover:text-color-yellow-custom cursor-pointer" href="/tecnologias" >Shows e Eventos</a>
          <a className="hover:text-color-yellow-custom cursor-pointer" href="https://api.whatsapp.com/send?phone=5511933407606" target="_blank"  >Contato</a>
        </div>
      }

        
    </nav>
  )
}
