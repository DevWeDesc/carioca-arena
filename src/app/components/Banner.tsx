import Image from 'next/image'

export default function Banner() {
  return (
    <>  
    <div className="bg-[url('/banner.jpg')] h-24 lg:h-80 bg-cover bg-center border-b"> 
      <div className="h-20 bg-white mx-auto w-3/5 absolute inset-x-0 mt-[4.5rem] rounded-lg z-10 lg:w-2/5 lg:mt-[17rem]">
        <div className="flex flex-col justify-center items-center h-80 lg:h-52  gap-2 lg:gap-4 m-2">
          <h1 className="text-sm lg:text-3xl font-bold text-center text-bege-800">Arena Carioca</h1>
          <h2 className="text-xs lg:text-sm text-center">Aqui você encontra Esportes de Areia | Gastronomia & Drinks | Shows</h2>

          <div className="flex flex-wrap gap-2 lg:gap-4 h-80 content-center justify-center">
            <div className="bg-bege-800 w-28 h-28 rounded-lg p-2 gap-1 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-white">Beach Tennis</span>
              <Image src="/beachtennis.jpg" width={80} height={80} alt="raquete" className="pb-1"/>
              <button className="bg-white text-black px-2 text-xs font-semibold rounded-full uppercase">Agende-já</button>
            </div>
            <div className="bg-bege-800 w-28 h-28 rounded-lg p-2 gap-1 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-white">Volêi de Praia</span>
              <Image src="/voleipraia.jpg" width={80} height={80} alt="raquete" className="pb-1"/>
              <button className="bg-white text-black px-2 text-xs font-semibold rounded-full uppercase">Agende-já</button>
            </div>
            <div className="bg-bege-800 w-28 h-28 rounded-lg p-2 gap-1 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-white">Gastronomia</span>
              <Image src="/gastro.jpg" width={80} height={80} alt="raquete" className="pb-1"/>
              <button className="bg-white text-black px-2 text-xs font-semibold rounded-full uppercase">Cardapio</button>
            </div>
            <div className="bg-bege-800 w-28 h-28 rounded-lg p-2 gap-1 flex flex-col items-center justify-center">
              <span className="text-small font-bold text-white">Shows e Eventos</span>
              <Image src="/shows.jpg" width={80} height={80} alt="raquete" className="pb-1"/>
              <button className="bg-white text-black px-2 text-xs font-semibold rounded-full uppercase">Veja mais</button>
            </div>
          </div>  
        </div>
      </div>
      </div>
    </>
  )
}
