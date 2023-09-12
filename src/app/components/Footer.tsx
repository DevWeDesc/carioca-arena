
import {BsInstagram, BsFacebook, BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
  return (
    <>
      {/* https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections */}
      <div className='pt-4' style={{height: '150px', overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M0.00,49.98 C171.27,184.05 349.20,-49.98 556.71,101.16 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '##000000'}}></path></svg></div>
      <div className="bg-black text-white pb-10">
        <div className="w-2/3 mx-auto flex justify-between">
          <div className='max-w-[22%] flex flex-col gap-2'>
            <h3 className='text-bege-800 font-bold text-lg mb-2'>ARENA CARIOCA</h3>
            <p><span className='text-bege-800 font-bold'>Endereço: </span>Av. Portugal, 68 - Jardim Pilar, Mauá - SP, 09370-000 </p>
            <p><span className='text-bege-800 font-bold'>Telefone: </span>(11) 94160-7606 </p>
            <span className='text-bege-800 font-bold'>Redes sociais:
            <div className='flex gap-4 text-white mt-2'>
              <BsWhatsapp/>
              <BsInstagram/>
              <BsFacebook/>
              </div> 
            </span>
          </div>
          <div>
            <h3 className='text-bege-800 font-bold text-lg mb-2'>LINKS RÁPIDOS</h3>
            <div className='flex flex-col gap-2'>
              <a href='#' className='hover:text-bege-800'>Home</a>
              <a href='#planos' className='hover:text-bege-800'>Planos</a>
              <a href='#servicos' className='hover:text-bege-800'>Serviços & Cardapio</a>
              <a href='#shows' className='hover:text-bege-800'>Shows</a>
              <a href='#faq' className='hover:text-bege-800'>Perguntas Frequentes</a>
            </div>
          </div>
          <div>
          <h3 className='text-bege-800 font-bold text-lg mb-2'>HORÁRIO DE FUNCIONAMENTO</h3>
            <div className='flex gap-6'>
              <div>
                <p className='font-semibold text-bege-800'>Segunda-Feira:</p>
                <p className='font-semibold text-bege-800'>Terça-Feira:</p>
                <p className='font-semibold text-bege-800'>Quarta-Feira:</p>
                <p className='font-semibold text-bege-800'>Quinta-Feira:</p>
                <p className='font-semibold text-bege-800'>Sexta-Feira:</p>
                <p className='font-semibold text-bege-800'>Sábado:</p>
                <p className='font-semibold text-bege-800'>Domingo:</p>
              </div>
              <div>
                <p>10:00 - 00:00</p>
                <p>10:00 - 00:00</p>
                <p>10:00 - 00:00</p>
                <p>10:00 - 00:00</p>
                <p>10:00 - 00:00</p>
                <p>10:00 - 00:00</p>
                <p>10:00 - 00:00</p>
              </div>
              
            </div>
            
          </div>
        </div>        
      </div>
      <div className='bg-bege-800 flex justify-between px-10 items-center h-full py-4'>
        <span> Copyright © 2023 Arena Carioca - Todos os direitos reservados</span>
        <span> Denvolvido por <a href="https://www.wedesc.com.br" target='_blank' className='font-bold'> WeDesc 🚀</a></span>
      </div>
    </>

  )
}
