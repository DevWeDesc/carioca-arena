import Image from 'next/image'

export default function Banner() {
  return (
    <>  
    <div className="bg-[url('/banner.jpg')] h-24 lg:h-64 bg-cover bg-center border-b" /> 
      <div className="h-full bg-white mx-auto w-3/5 lg:w-2/5 rounded-2xl mt-[-25px] mb-12 flex flex-col gap-4">

          <h1 className="text-xl lg:text-3xl font-bold text-center text-bege-800 mt-2">Arena Carioca</h1>
          <h2 className="text-sm lg:text-sm text-center">Aqui você encontra Esportes de Areia | Gastronomia & Drinks | Shows</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <div className="bg-bege-800 rounded-lg shadow-md p-2 lg:h-44 h-36 flex flex-col justify-between items-center">
              <Image src="/beachtennis.jpg" width={120} height={60} alt="raquete" className="rounded-lg transition duration-300 ease-in-out hover:scale-105"/>
              <h2 className="lg:text-lg text-sm text-white font-semibold">Beach Tennis</h2>
              <button className="bg-white text-black px-4 py-1 text-xs rounded-lg font-semibold ">Agende-já</button>
            </div>
            <div className="bg-bege-800 rounded-lg shadow-md p-2 lg:h-44 h-36 flex flex-col justify-between items-center">
              <Image src="/voleipraia.jpg" width={120} height={60} alt="raquete" className="rounded-lg transition duration-300 ease-in-out hover:scale-105"/>
              <h2 className="lg:text-lg text-sm text-white font-semibold">Volêi de Praia</h2>
              <button className="bg-white text-black px-4 py-1 text-xs rounded-lg font-semibold">Agende-já</button>
            </div>
            <div className="bg-bege-800 rounded-lg shadow-md p-2 lg:h-44 h-36 flex flex-col justify-between items-center">
              <Image src="/gastro.jpg" width={120} height={60} alt="raquete" className="rounded-lg transition duration-300 ease-in-out hover:scale-105"/>
              <h2 className="lg:text-lg text-sm text-white font-semibold">Gastronomia</h2>
              <button className="bg-white text-black px-4 py-1 text-xs rounded-lg font-semibold">Cardapio</button>
            </div>
            <div className="bg-bege-800 rounded-lg shadow-md p-2 lg:h-44 h-36 flex flex-col justify-between items-center">
              <Image src="/shows.jpg" width={120} height={60} alt="raquete" className="rounded-lg transition duration-300 ease-in-out hover:scale-105"/>
              <h2 className="lg:text-base text-xs text-white font-semibold">Shows e Eventos</h2>
              <button className="bg-white text-black  px-4 py-1 text-xs rounded-lg font-semibold">Veja mais</button>
            </div>
            
          </div>  
        </div>
    </>
  )
}
