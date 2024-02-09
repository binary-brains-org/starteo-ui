import Lottie from 'lottie-react';
import data from './Files/logout.json';

const Logout = () => {
  return <Lottie width="100%" height="100%" animationData={data} loop={true} />;
};

export default Logout;
