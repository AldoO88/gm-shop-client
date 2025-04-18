import { Swiper, SwiperSlide } from 'swiper/react';

import dahuaImage from '../assets/images/image-dahua-color.png';
import commaxImage from '../assets/images/image-commax-portero.png';
import dahuaSaxxonImage from '../assets/images/image-dahua-saxxon.png';
import ngtecoCamarasImage from '../assets/images/image-ngteco-camaras.png';
import vivotekFacialImage from '../assets/images/image-vivotek-facial.png';
import wifiYonusaImage from '../assets/images/image-wifi-yonusa.png';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const ActiveSlider = () => {
  return (
    <>
      <Swiper
       autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className='w-[120rem] h-[32rem]'
      >
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-full bg-gray-100'>
            <img className='object-cover max-w-full max-h-full' src='https://ftp3.syscom.mx/usuarios/ftp/banners_index/syscom/3000x1080-access-point.jpg'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-full bg-gray-100'>
            <img
              src={commaxImage}
              alt='Commax Portero'
              className='object-cover max-w-full max-h-full'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-full bg-gray-100'>
            <img
              src={dahuaSaxxonImage}
              alt='Dahua Saxxon'
              className='object-cover max-w-full max-h-full'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-full bg-gray-100'>
            <img
              src={ngtecoCamarasImage}
              alt='NGTeco Camaras'
              className='object-cover max-w-full max-h-full'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-full bg-gray-100'>
            <img
              src={vivotekFacialImage}
              alt='Vivotek Facial'
              className='object-cover max-w-full max-h-full'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex items-center justify-center w-full h-full bg-gray-100'>
            <img
              src={wifiYonusaImage}
              alt='Wifi Yonusa'
              className='object-cover max-w-full max-h-full'
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ActiveSlider;