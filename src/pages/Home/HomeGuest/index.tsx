import Header from './Header';
import HelloSection from './HelloSection';
import Footer from './Footer';
import guestImage1 from '/guest1.jpg';
import Image from '@/components/Image';

const HomeGuest = () => {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-700">
      <Header />
      <HelloSection />
      <section className="py-[4rem] flex flex-col bg-gray-200 bg-gradient-to-r from-cyan-600 to-blue-700">
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
      <Footer />
    </div>
  );
};

export default HomeGuest;
