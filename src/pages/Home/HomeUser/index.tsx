import Carousel from './HomeCarousel/Carousel';

const HomeUser = () => {
  // Données à fournir pour la prop 'data'
  const data = [{ date: new Date(), price: 0, description: 'coucou' }];

  return <Carousel data={data} />;
};

export default HomeUser;
