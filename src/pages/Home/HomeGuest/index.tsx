import Header from './Header';
import HelloSection from './HelloSection';
import Footer from './Footer';
import guestImage1 from '/guest1.jpg';
import Image from '@/components/Image';
import Sparkles from '@/components/Lotties/Sparkles';

const HomeGuest = () => {
  return (
    <div className="w-full">
      <Header />
      <HelloSection />
      <section className="py-[4rem] flex flex-col bg-gray-200">
        <span className="w-full">
          <div className="w-full h-[400px] flex flex-row justify-between">
            <div className="h-full w-1/2">
              <div className="relative overflow-hidden w-full h-full flex justify-end ">
                <Image src={guestImage1} className="rounded-lg">
                  <>image</>
                </Image>
              </div>
            </div>
            <div className="h-full w-1/2 p-7">
              <p className="w-5/6 p-4 text-2xl flex-wrap flex">
                People make really big effort on theire startup{' '}
              </p>
              <p className="w-4/5 p-4 flex-wrap flex text-2xl">
                this application is a walkthrough to help those little ideas on
                their journey to the top of the world.
              </p>
            </div>
          </div>
        </span>
      </section>
      <section className="py-[4rem] flex flex-row">
        <span className="w-full">
          <div className="w-full h-[400px] justify-center flex flex-row">
            <div className="h-full w-1/2 p-7 relative overflow-hidden">
              <div className="w-full">
                <p className="text-2xl flex-start p-4 flex-wrap flex">
                  People make really big effort on theire startup, this
                  application is a walkthrough to help those little ideas on
                  their journey to the top of the world
                </p>
                <p className="w-4/5 p-4 flex-wrap flex"></p>
              </div>
            </div>
          </div>
        </span>
      </section>
      <section className="bg-black h-[400px]"></section>
      <Footer />
    </div>
  );
};

export default HomeGuest;
