import { Ping as PingPong } from '../components/Lotties';

const Ping = () => {
  return (
    <div className="full-screen flex-all-center">
      <div className="w-[30%] flex flex-col gap-2 text-center">
        <PingPong />
        <div className="text-3xl font-bold font-Sixtyfour">Pong</div>
      </div>
    </div>
  );
};

export default Ping;
