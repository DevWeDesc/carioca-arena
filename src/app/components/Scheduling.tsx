import { HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi'
import { GiTennisCourt } from 'react-icons/gi'

export default function Scheduling() {
  return (
    <div className="bg-bege-200 h-full p-4">
      <h2 className="text-2xl text-center text-black font-bold">Como realizar o agendamento:</h2>
      <div className="flex flex-col items-center lg:items-start gap-12 lg:flex-row lg:w-3/5 lg:mx-auto mt-12">
        <div className='w-8/12 flex flex-col items-center justify-center gap-4 p-4'>
          <HiOutlineLocationMarker className="text-6xl text-bege-800" />
          <p className="text-black font-bold">Unidade Arena Carioca</p>
          <p className="text-white text-justify">Venha até nossa unidade localizada na Av. Portugal, 68 - Jardim Pilar, Mauá - SP  </p>
        </div>
        <div className='border border-bege-800 w-3/5 lg:hidden'/>
        <div className='w-8/12 flex flex-col items-center justify-center gap-4 p-4'>
          <HiOutlineCalendar className="text-6xl text-bege-800" />
          <p className="text-black font-bold">Escolha uma data para reservar</p>
          <p className="text-white text-justify">Reserve um dos nossos horários de locação das quadras</p>
        </div>
        <div className='border  border-bege-800 w-3/5 lg:hidden'/>
        <div className='w-8/12 flex flex-col items-center justify-center gap-4 p-4'>
          <GiTennisCourt className="text-6xl text-bege-800" />
          <p className="text-black font-bold">Venha jogar com seus amigos</p>
          <p className="text-white text-justify">Escolha um plano e venha aproveitar com seus amigos</p>
        </div>
      </div>

    </div>
  )
}
