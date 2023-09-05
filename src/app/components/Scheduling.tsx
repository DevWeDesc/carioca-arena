import { HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi'
import { GiTennisCourt } from 'react-icons/gi'

export default function Scheduling() {
  return (
    <>
    <div className="bg-bege-200 h-full p-4">
      <h2 className="text-2xl text-center text-black font-bold">Como realizar o agendamento:</h2>
      <div className="flex flex-col items-center lg:items-start gap-12 lg:flex-row lg:w-3/5 lg:mx-auto mt-12">
        <div className='w-8/12 flex flex-col items-center justify-center gap-4 p-4'>
          <HiOutlineLocationMarker className="text-6xl text-bege-800" />
          <h3 className="text-black font-bold">Unidade Arena Carioca</h3>
          <p className="text-white text-justify">Venha até nossa unidade localizada na Av. Portugal, 68 - Jardim Pilar, Mauá - SP  </p>
        </div>
        <div className='border border-bege-800 w-3/5 lg:hidden'/>
        <div className='w-8/12 flex flex-col items-center justify-center gap-4 p-4'>
          <HiOutlineCalendar className="text-6xl text-bege-800" />
          <h3 className="text-black font-bold">Escolha uma data para reservar</h3>
          <p className="text-white text-justify">Reserve um dos nossos horários de locação das quadras</p>
        </div>
        <div className='border  border-bege-800 w-3/5 lg:hidden'/>
        <div className='w-8/12 flex flex-col items-center justify-center gap-4 p-4'>
          <GiTennisCourt className="text-6xl text-bege-800" />
          <h3 className="text-black font-bold">Venha jogar com seus amigos</h3>
          <p className="text-white text-justify">Escolha um plano e venha aproveitar com seus amigos</p>
        </div>
      </div>
    </div>
    {/* https://jerosoler.github.io/css-svg-generator-waves/ */}
    <svg viewBox="0 0 1903 132" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(165, 156, 149, 1)" d="M 0 9 C 477 9 477 110 954 110 L 954 110 L 954 0 L 0 0 Z" strokeWidth="0"></path> <path fill="rgba(165, 156, 149, 1)" d="M 953 110 C 1428 110 1428 12 1903 12 L 1903 12 L 1903 0 L 953 0 Z" strokeWidth="0"></path> </svg>
    </>
  )
}
