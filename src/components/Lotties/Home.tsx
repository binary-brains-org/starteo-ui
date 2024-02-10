import Lottie from 'lottie-react';
import data from './Files/Home.json';

const Home = () => {
  return <Lottie width="100%" height="100%" animationData={data} loop={true} />;
};

export default Home;
