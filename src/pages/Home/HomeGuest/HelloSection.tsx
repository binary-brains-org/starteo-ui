import { TypeAnimation } from 'react-type-animation';
import appProperty from '@/configuration/appProperty';
import { Button } from '@mui/material';

const HelloSection = () => {
  return (
    <section className="px-4 py-8 bg-[url('/square-case.svg')] bg-center flex justify-between w-full mb-5">
      <div className="p-5 flex flex-col gap-5 items-start w-full">
        <div className="flex flex-col">
          <TypeAnimation
            sequence={[
              `Welcome to ${appProperty.name} !`,
              2000,
              appProperty.slogan,
              4000,
            ]}
            wrapper="h2"
            className="text-5xl font-bold font-Roboto after:text-primary"
            repeat={Infinity}
          />
          <h3 className="text-3xl font-Quicksand font-semibold">
            {appProperty.whatYouDo}
          </h3>
          <p className="text-xl font-Lato">{appProperty.description}</p>
        </div>
        <Button variant="contained">Contact us</Button>
      </div>

      <div className="relative w-full flex h-full">
        <div className="w-[10rem] h-[10rem] bg-black rounded-full flex absolute right-0 top-[5rem]">
          <div className="w-[4rem] h-[4rem] bg-black rounded-full absolute top-[-1rem] left-[-1rem]"></div>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
