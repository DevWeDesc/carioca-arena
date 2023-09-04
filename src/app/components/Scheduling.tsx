import { GrLocation, GrCalendar } from 'react-icons/gr'
import { GiTennisCourt } from 'react-icons/gi'

export default function Scheduling() {
  return (
    <div className="bg-bege-200 h-full mt-80 lg:mt-48 p-4">
      <h2 className="text-2xl text-center text-black font-bold">Como realizar o agendamento</h2>
      <div className="flex flex-col items-center">
        <div className='w-3/5 flex flex-col items-center justify-center gap-4'>
          <GrLocation className="text-5xl" />
          <p className="text-black font-bold">Escolha a unidade mais próxima de você</p>
          <p className="text-white">Venha até nossa unidade Arena Carioca </p>

        </div>

          {/* <GrCalendar />
          <GiTennisCourt /> */}

      </div>

    </div>
  )
}
