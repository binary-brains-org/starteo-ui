import Lottie from 'lottie-react';
import data from './Files/Ping.json';

const Ping = () => {
  return <Lottie width="100%" height="100%" animationData={data} loop={true} />;
};

export default Ping;
