import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Wireframe() {
  return (
    <div style={{ height: '500px' }}>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/sample/001.jpeg" alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sample/002.jpeg" alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
