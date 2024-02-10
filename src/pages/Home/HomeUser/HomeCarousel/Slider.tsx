import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton, Box } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import Carousel from './Carousel';
export default function SimpleSlider() {
  const data = [
    { date: new Date(), price: 0, description: 'Description', user: 'User' },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef<Slider>(null);

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <Box className="w-100%">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Carousel data={data} />
          </Box>
        </div>
        <div>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Carousel data={data} />
          </Box>
        </div>
        <div>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Carousel data={data} />
          </Box>
        </div>
        <div>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Carousel data={data} />
          </Box>
        </div>
        <div>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Carousel data={data} />
          </Box>
        </div>
        <div>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Carousel data={data} />
          </Box>
        </div>
      </Slider>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <IconButton
          onClick={goToPrev}
          disabled={sliderRef.current?.innerSlider.state.currentSlide === 0}
        >
          <NavigateBefore />
        </IconButton>
        <IconButton
          onClick={goToNext}
          disabled={
            sliderRef.current?.innerSlider.state.currentSlide ===
            sliderRef.current?.innerSlider.state.slideCount - 1
          }
        >
          <NavigateNext />
        </IconButton>
      </div>
    </Box>
  );
}
