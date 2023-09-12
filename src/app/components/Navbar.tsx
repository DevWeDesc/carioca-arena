'use client'

export default function Navbar({ isTrue, isMenuClicked, setIsMenuClicked}: any) {
  
  function disablescroll() {
    if(isMenuClicked){
      document.body.style.overflow = 'unset';
    }else {
      document.body.style.overflow = 'hidden';
    }
  }
  return (
    <nav>
      <div className="bg-[url('/fundo-bg.jpg')] h-32 bg-cover bg-center lg:h-60" />

      {
        isTrue ?
        <>        
        <nav className="h-14 bg-white w-full drop-shadow-lg flex items-center justify-end pr-2">
          <div className="border p-2 flex ">
            <div className="burger-menu h-6 flex flex-col items-start justify-between cursor-pointer" onClick={ ()=> { setIsMenuClicked(!isMenuClicked); disablescroll() } } >
              <div className={`burger-bar w-6 h-0.5 rounded bg-gray-800 transform $  {isMenuClicked ? "rotate-45 translate-x-0 translate-y-[9px]" : ""}`}></div>
              <div className={`burger-bar w-6 h-0.5 rounded bg-gray-800 transform $  {isMenuClicked ? "-rotate-45 -translate-x-0 -translate-y-[2px]" : ""}`}></div>
              <div className={`burger-bar w-6 h-0.5 rounded bg-gray-800 transform $  {isMenuClicked ? "scale-0" : ""}`}></div>
            </div>
          </div>
        </nav>
        <div className={`menu w-screen left-0 h-full bg-black opacity-90 z-40 fixed top-3 drop-shadow-md ${isMenuClicked ? "mt-[10.6rem]" : "hidden"} `}>
          <div className="h-[74%] flex flex-col items-center justify-center gap-6 text-white text-sm font-semibold uppercase ">
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" onClick={ ()=> { setIsMenuClicked(!isMenuClicked); disablescroll() } } href="/" >Inicio</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" onClick={ ()=> { setIsMenuClicked(!isMenuClicked); disablescroll() } } href="#planos" >Locação de Quadras</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" onClick={ ()=> { setIsMenuClicked(!isMenuClicked); disablescroll() } } href="#servicos" >Serviços</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" onClick={ ()=> { setIsMenuClicked(!isMenuClicked); disablescroll() } } href="#servicos" >Cardapio</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" onClick={ ()=> { setIsMenuClicked(!isMenuClicked); disablescroll() } } href="#shows" >Shows e Eventos</a>
            <a className="hover:text-bege-200 cursor-pointer w-1/2 text-center hover:border-b" onClick={ ()=> { setIsMenuClicked(!isMenuClicked); disablescroll() } } href="https://api.whatsapp.com/send?phone=5511933407606" target="_blank">Contato</a>
          </div>
        </div>
      </> 
      :
        <div className="flex justify-between gap-10 lg:w-3/5 text-sm lg:text-lg lg:mx-auto font-bold py-4 border-b uppercase h-14">
          <a className="hover:text-bege-800 cursor-pointer" href="/" >Inicio</a>
          <a className="hover:text-bege-800 cursor-pointer" href="#planos" >Locação de Quadras</a>
          <a className="hover:text-bege-800 cursor-pointer" href="#servicos" >Serviços</a>
          <a className="hover:text-bege-800 cursor-pointer" href="#servicos" >Cardápio</a>
          <a className="hover:text-bege-800 cursor-pointer" href="#shows" >Shows e Eventos</a>
          <a className="hover:text-bege-800 cursor-pointer" href="https://api.whatsapp.com/send?phone=5511933407606&text=Olá, tenho interesse em realizar o agendamento da quadra" target="_blank"  >Contato</a>
        </div>
      }
    </nav>
  )
}
