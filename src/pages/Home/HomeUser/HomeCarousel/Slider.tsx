import { Swiper, SwiperSlide } from 'swiper/react';

import './Slider.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Carousel from './Carousel';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function App() {
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
          <div className="swiper-button-next slider-arrow">
            <ArrowForwardIcon />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;

