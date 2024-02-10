import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Carousel from './Carousel';

function Slider() {
  const data = [
    {
      date: new Date(),
      price: 0,
      description:
        'Lorem Ipsum For anyone who having issues because they are inside the modules package',
      user: 'Hello',
    },
  ];
  return (
    <div className="container">
      <h1 className="heading">Starteo</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 1,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <Carousel data={data} />;
        </SwiperSlide>
        <SwiperSlide>
          <Carousel data={data} />;
        </SwiperSlide>
        <SwiperSlide>
          <Carousel data={data} />;
        </SwiperSlide>
        <SwiperSlide>
          <Carousel data={data} />;
        </SwiperSlide>
        <SwiperSlide>
          <Carousel data={data} />;
        </SwiperSlide>
        <SwiperSlide>
          <Carousel data={data} />;
        </SwiperSlide>
        <SwiperSlide>
          <Carousel data={data} />;
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Slider;

