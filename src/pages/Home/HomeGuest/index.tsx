import Header from './Header';
import HelloSection from './HelloSection';
import Footer from './Footer';

const HomeGuest = () => {
  return (
    <div className="w-full">
      <Header />
      <HelloSection />
      <section className="py-[5rem] flex flex-col">
        <span className="text-2xl text-center w-full font-bold">
          Add an overview here
        </span>
      </section>
      <Footer />
    </div>
  );
};

export default HomeGuest;
