import { FaCheck } from 'react-icons/fa'
export default function Plans() {
  return (
    <div className="h-full p-4">
      <h2 className="text-2xl text-center text-bege-800 font-bold mb-4">Aluguel de Quadra</h2>
      <div className="bg-white w-2/3 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 lg:px-8">

        <div className="bg-bege-800 rounded-lg h-96 p-4 text-white grid justify-items-stretch drop-shadow-md">
          <h3 className="text-xl lg:text-2xl text-center font-bold border-b-2 w-full">ALUGUEL DE QUADRA</h3>
          <div className="flex flex-col justify-center border-b-2">
          <div className='flex items-center gap-2'>
            <FaCheck className="text-lime-600"/>
            <p className="">1 HORA</p>
          </div>
          <div className='flex items-center gap-2'>
            <FaCheck className="text-lime-600" />
            <p className="">1 POR SEMANA</p>
          </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className="text-center font-semibold">Ver dias e horarios disponiveis</p>
            <button className="py-4 px-2 bg-whatsapp text-white font-bold rounded-lg border">Entrar em contato </button>
          </div>
        </div>
        
        <div className="bg-bege-100 rounded-lg h-96 p-4 text-bege-800 grid justify-items-stretch drop-shadow-md">
          <h3 className="text-xl lg:text-2xl text-center font-bold border-b-2 border-bege-800 w-full">AVULSO</h3>
          <div className="flex flex-col justify-evenly border-b-2 border-bege-800">
            <h3 className='font-bold text-center lg:text-xl'>DIURNO</h3>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaCheck className="text-lime-600" />
                <p>1 VEZ</p>
              </div>
              <p className="font-bold">R$ 180,00</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <h3 className='font-bold text-center lg:text-xl'>NOTURNO</h3>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaCheck className="text-lime-600" />
                <p>1 VEZ</p>
              </div>
              <p className="font-bold">R$ 180,00</p>
            </div>
          </div>
        </div>
        <div className="bg-bege-100 rounded-lg h-96 p-4 text-bege-800 grid justify-items-stretch drop-shadow-md">
          <h3 className="text-xl lg:text-2xl text-center font-bold border-b-2 border-bege-800 w-full">MENSAL</h3>
          <div className="flex flex-col justify-evenly border-b-2 border-bege-800">
            <h3 className='font-bold text-center lg:text-xl'>DIURNO</h3>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaCheck className="text-lime-600" />
                <p>1H POR SEMANA</p>
              </div>
              <p className="font-bold">R$ 460,00</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
          <h3 className='font-bold text-center lg:text-xl'>NOTURNO</h3>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaCheck className="text-lime-600" />
                <p>1H POR SEMANA</p>
              </div>
              <p className="font-bold">R$ 460,00</p>
            </div>
          </div>
        </div>
        <div className="bg-bege-100 rounded-lg h-96 p-4 text-bege-800 grid justify-items-stretch drop-shadow-md">
          <h3 className="text-xl lg:text-2xl text-center font-bold border-b-2 border-bege-800 w-full">MENSAL</h3>
          <div className="flex flex-col justify-evenly border-b-2 border-bege-800">
            <h3 className='font-bold text-center lg:text-xl'>DIURNO</h3>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaCheck className="text-lime-600" />
                <p>2H POR SEMANA</p>
              </div>
              <p className="font-bold">R$ 660,00</p>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <h3 className='font-bold text-center lg:text-xl'>NOTURNO</h3>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                <FaCheck className="text-lime-600" />
                <p>2H POR SEMANA</p>
              </div>
              <p className="font-bold">R$ 660,00</p>
            </div>
          </div>
        </div>  
        

      
        
      </div>

    </div>
   

  )
}
