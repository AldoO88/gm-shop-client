import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

import { useProducts } from "../hooks/useProducts";
import { useExchangeRates } from "../hooks/useExchangeRates";
import Card from "./Card";

const EnergizerSlider = (categoryId) => {

  const { products, loading, error } = useProducts(categoryId)
  const { price } = useExchangeRates()

  return (
    <section className="flex flex-col items-center justify-center py-4">
      <span className="flex justify-start w-[95%]">
        <h2>{'Alarmas & Intrusión  >'} </h2>
        <h2>&nbsp;{'Cercas Eléctricas  >'}</h2>
        <h2>&nbsp;{'Energizadores '} </h2>
      </span>
      <div className="flex flex-row w-[95%] py-1">
        <hr className="w-[10%] border-blue-600 border-[1px]"/>
        <hr className="w-[90%] border-gray-400 border-[1px]"/>  
      </div>
      

    {
        error 
          ? <p>{error}</p> 
          : loading 
          ? <div role="status" className="flex w-[95%] h-[35rem] items-center justify-center">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
            :
    
    <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
       
        slidesPerGroup={6}
        slidesPerView={6}
        slidesPerGroupAuto={true}
        cssMode={true}
        centeredSlides={false}
        grabCursor={true}
        freeMode={true}
        mousewheel={true}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Navigation, Mousewheel, Keyboard]}
        className='flex w-[95%] h-[32rem] items-center justify-center py-2'
        >

        {products.map((product) => (
              <SwiperSlide 
                key={product.id}
                className='flex items-start justify-center py-0 my-0'>

                <Card product={product} price={price}/>
               

              </SwiperSlide>
           ))}
           
      </Swiper>
    }
      </section>
  );
};

export default EnergizerSlider;