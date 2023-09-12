'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { BsInstagram } from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function BannerImagens({ isTrue }: any) {
  return (
    <div className="py-10 bg-[url('/bannerclear.jpg')] bg-cover bg-center" id='shows'>
      <div className='bg-black p-10 lg:w-3/5 w-4/5   mx-auto'>

      <Swiper
        slidesPerView={isTrue ? 1 : 4}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="h-full bg-black"
        >
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story01.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story05.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story02.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story03.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story04.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story01.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story05.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story02.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story03.jpg')] bg-cover" />
        <SwiperSlide className="bg-slate-500 !h-72 bg-[url('/story04.jpg')] bg-cover" />
      </Swiper>
      <div className='lg:flex lg:justify-center lg:flex-row mt-6 lg:gap-10 flex flex-col items-center gap-4'>
        <a target="_blank" href='https://www.instagram.com/arenacariocamaua/'>
          <button className='bg-bege-800 hover:bg-bege-200 text-white px-5 py-2 rounded-md flex items-center gap-2'> <BsInstagram /> Seguir Instagram</button>
        </a>
        <a target="_blank" href='https://www.instagram.com/stories/arenacariocamaua/3188925889433418019/'> 
          <button className='bg-bege-800 hover:bg-bege-200 text-white px-5 py-2 rounded-md'>Ver mais</button>
        </a>
      </div>
      </div>
    </div>
  );
}
