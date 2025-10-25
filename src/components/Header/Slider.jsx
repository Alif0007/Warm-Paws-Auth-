
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import i1 from '../../assets/1.jpg'
import i2 from '../../assets/2.jpg'
import i3 from '../../assets/3.jpg'
import i4 from '../../assets/4.jpg'
import i5 from '../../assets/5.jpg'
import i6 from '../../assets/6.jpg'
import i7 from '../../assets/7.jpg'
import i8 from '../../assets/8.jpg'

// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:h-screen">
        <SwiperSlide><img src={i1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={i2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={i3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={i4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={i5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={i6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={i7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={i8} alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}
