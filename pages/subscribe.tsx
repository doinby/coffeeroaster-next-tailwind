import {useState} from 'react';
import {NextPage} from 'next';

import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import Hero from '../components/common/Hero';
import Instruction from '../components/subscribe/Instruction';
import SubscriptionOptions from '../components/subscribe/SubscriptionOptions';
import Summary from '../components/subscribe/Summary';
import SummaryModal from '../components/subscribe/SummaryModal';

const Subscribe: NextPage = () => {
  const [preference, setPreference] = useState(null);
  const [beanType, setBeanType] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [grindOption, setGrindOption] = useState(null);
  const [delivery, setDelivery] = useState(null);

  const currentOptions = [
    preference,
    beanType,
    quantity,
    grindOption,
    delivery,
  ];
  const hasValue = (value) => value !== null;
  const isPlanComplete = () => currentOptions.every(hasValue);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Nav />

      <main>
        <Hero
          bgImg='bg-subscribe-hero-mobile'
          title='Create a plan'
          desc='Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door.'
        />
        <Instruction />
        <SubscriptionOptions
          preference={preference}
          setPreference={setPreference}
          beanType={beanType}
          setBeanType={setBeanType}
          quantity={quantity}
          setQuantity={setQuantity}
          grindOption={grindOption}
          setGrindOption={setGrindOption}
          delivery={delivery}
          setDelivery={setDelivery}
        />
        <section id='summary-section' className='px-0 pt-0'>
          <div className='bg-dark-blue px-6 py-10 rounded-lg w-full flex flex-col gap-4'>
            <p className='uppercase text-neutral-gray'>Order Summary</p>
            <Summary
              preference={preference}
              beanType={beanType}
              quantity={quantity}
              grindOption={grindOption}
              delivery={delivery}
              darkMode={true}
            ></Summary>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={isPlanComplete() ? false : true}
            className={`${
              isPlanComplete()
                ? 'btn-primary'
                : 'btn-disabled cursor-not-allowed'
            } place-self-center`}
          >
            Confirm Plan
          </button>
        </section>

        <SummaryModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          preference={preference}
          beanType={beanType}
          quantity={quantity}
          grindOption={grindOption}
          delivery={delivery}
        />
      </main>

      <Footer />
    </>
  );
};

export default Subscribe;
