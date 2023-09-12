'use client';
import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

export default function AccordionFAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
    <div className='w-1/2 mx-auto h-96' id='faq'>
      <h2 className="text-2xl text-center text-bege-800 font-bold my-4">FAQ - PERGUNTAS FREQUENTES</h2>
      <div className="mb-4">
        <div className='flex items-center border-b'>
          <button type="button" className="w-full p-3 text-left font-bold text-bege-800" onClick={() => toggleAccordion(0)} >
            Como realizar o agendamento da quadra?
          </button>
          {activeAccordion === 0 ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {activeAccordion === 0 && (
          <div className="p-3">
            <p>Entre em contato através no nosso Whatsapp, basta clicar em entrar em contato na área de planos.</p>
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className='flex items-center border-b'>
          <button type="button" className="w-full p-3 text-left font-bold text-bege-800" onClick={() => toggleAccordion(1)} >
            Posso realizar um aula experimental?
          </button>
          {activeAccordion === 1 ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {activeAccordion === 1 && (
          <div className="p-3">
            <p>Sim, a primeira aula é por nossa conta</p>
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className='flex items-center border-b'>
          <button type="button" className="w-full p-3 text-left font-bold text-bege-800" onClick={() => toggleAccordion(2)} >
            É fornecido o equipamento para a utilização da quadra?
          </button>
          {activeAccordion === 2 ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {activeAccordion === 2 && (
          <div className="p-3">
            <p>Sim, emprestamos nosso equipamento e você devolve no final da utilização do mesmo.</p>
          </div>
        )}
      </div>
      <div className="mb-4">
        <div className='flex items-center border-b'>
          <button type="button" className="w-full p-3 text-left font-bold text-bege-800" onClick={() => toggleAccordion(3)} >
            É necessario realizar o pagamento antecipado?
          </button>
          {activeAccordion === 3 ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {activeAccordion === 3 && (
          <div className="p-3">
            <p>Não, você pode fazer o agendamento e realizar o pagamento assim que chegar em nossa unidade</p>
          </div>
          )}
      </div>
      <div className="mb-4">
        <div className='flex items-center border-b'>
          <button type="button" className="w-full p-3 text-left font-bold text-bege-800" onClick={() => toggleAccordion(4)} >
            É relizado eventos e shows na arena?
          </button>
          {activeAccordion === 4 ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {activeAccordion === 4 && (
          <div className="p-3">
            <p>Sim, sempre temos atrações em nossa arena, você pode também ficar por dentro seguindo nosso instagram</p>
          </div>
        )}
      </div>
    </div>
    
    </>
    
  );
}