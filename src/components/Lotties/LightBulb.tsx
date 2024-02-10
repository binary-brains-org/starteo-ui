import Lottie from 'lottie-react';
import data from './Files/light-bulb.json';

const LightBulb = () => {
  return (
    <Lottie width="500px" height="500px" animationData={data} loop={false} />
  );
};

export default LightBulb;
