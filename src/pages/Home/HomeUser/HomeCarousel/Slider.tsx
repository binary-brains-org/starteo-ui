/*
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Carousel from './Carousel';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { EffectCoverflow, Pagination , Navigation } from 'swiper/modules';

function Slider() {
  const data = [{ date: new Date(), price: 0, description: 'coucou' }];

  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
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
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBackIcon />
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next slider-arrow">
            <ArrowForwardIcon />
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
*/

/* <SwiperSlide>
          <img src={maria_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={maria_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={maria_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={maria_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={maria_5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={maria_6} alt="" />
        </SwiperSlide> 
        */

/*
import maria_1 from '@/assets/maria_1.jpg';
import maria_2 from '@/assets/maria_2.jpg';
import maria_3 from '@/assets/maria_3.jpg';
import maria_4 from '@/assets/maria_4.jpg';
import maria_5 from '@/assets/maria_5.jpg';
import maria_6 from '@/assets/maria_6.jpg';
*/

// import Carousel from './Carousel';

// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
/*const data = [
  { date: new Date(), price: 0, description: 'coucou', user: 'Hello' },
];*/

import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Carousel from './Carousel';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Slider() {
  const data = [
    { date: new Date(), price: 0, description: 'coucou', user: 'Hello' },
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
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className="flex justify-center flex-wrap gap-14">
          <Carousel data={data} />
        </SwiperSlide>
        <SwiperSlide className="card">
          <Carousel data={data} />
        </SwiperSlide>
        <SwiperSlide className="card">
          <Carousel data={data} />
        </SwiperSlide>
        <SwiperSlide className="card">
          <Carousel data={data} />
        </SwiperSlide>
        <SwiperSlide className="card">
          <Carousel data={data} />
        </SwiperSlide>
        <SwiperSlide className="card">
          <Carousel data={data} />
        </SwiperSlide>
        <SwiperSlide className="card">
          <Carousel data={data} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
