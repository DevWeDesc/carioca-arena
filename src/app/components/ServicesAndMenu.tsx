import React from 'react'

export default function ServicesAndMenu() {
  return (
    <div className="bg-black flex flex-col md:flex-row items-center justify-center" id='servicos'>
        <div className="w-full md:w-1/2 h-1/2 relative flex items-center justify-center">
          <img src="/beach.jpg" alt="beach tenis" className="opacity-30 hover:opacity-20 h-72 md:h-96 w-full" />
          <div className="absolute bg-opacity-70 text-white p-2 flex flex-col gap-10">
            <h4 className="sm:text-4xl text-2xl font-bold text-center">SERVIÇOS</h4>
            <ul className="flex flex-col gap-4 sm:gap-2">
              <li className="bg-bege-200 rounded-full text-center py-0 px-2 sm:py-2 sm:px-4"> ESPORTES </li>
              <li className="bg-bege-200 rounded-full text-center py-0 px-2 sm:py-2 sm:px-4"> EVENTOS </li>
              <li className="bg-bege-200 rounded-full text-center py-0 px-2 sm:py-2 sm:px-4"> SHOWS </li>
              <li className="bg-bege-200 rounded-full text-center py-0 px-2 sm:py-2 sm:px-4"> TABACARIA </li>
              <li className="bg-bege-200 rounded-full text-center py-0 px-2 sm:py-2 sm:px-4"> BAR & RESTAURANTE </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 relative flex items-center justify-center">
          <img src="/gastro.jpg" alt="hamburguer" className="opacity-50 hover:opacity-30 h-72 md:h-96 w-full" />
          <div className="absolute bg-opacity-70 text-white p-2">
          <h4 className="text-4xl font-bold text-center">CARDÁPIO</h4>
          </div>
        </div>
      </div>
  )
}
