import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from './Carousel';

const CarouselWithData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = axios.create({
      baseURL: '',
    });

    client.get('/products').then((res) => setData(res.data));
  }, []);

  return <Carousel data={data}></Carousel>;
};

export default CarouselWithData;
