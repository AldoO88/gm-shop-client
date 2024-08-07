import { Swiper, SwiperSlide } from 'swiper/react';
import imgSlider1 from '../assets/images/image-dahua-color.png';
import imgSlider2 from '../assets/images/image-commax-portero.png';
import imgSlider3 from '../assets/images/image-dahua-saxxon.png';
import imgSlider4 from '../assets/images/image-ngteco-camaras.png';
import imgSlider5 from '../assets/images/image-vivotek-facial.png';
import imgSlider6 from '../assets/images/image-wifi-yonusa.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const ActiveSlider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='flex w-[100%] h-[22rem] items-center justify-center'
      >
        <SwiperSlide><img className='h-full w-full object-center bg-cover' src={imgSlider1}/></SwiperSlide>
        <SwiperSlide><img src={imgSlider2}/></SwiperSlide>
        <SwiperSlide><img src={imgSlider3}/></SwiperSlide>
        <SwiperSlide><img src={imgSlider4}/></SwiperSlide>
        <SwiperSlide><img src={imgSlider5}/></SwiperSlide>
        <SwiperSlide><img src={imgSlider6}/></SwiperSlide>
      </Swiper>
    </>
  );
}

export default ActiveSlider;