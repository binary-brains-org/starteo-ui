import Lottie from 'lottie-react';
import data from './Files/light-bulb.json';

const LightBulb = () => {
  return <Lottie width="100%" height="100%" animationData={data} loop={true} />;
};

export default LightBulb;
