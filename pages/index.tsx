import type {NextPage} from 'next';

import Head from 'next/head';
import Footer from '../components/common/Footer';
import Hero from '../components/common/Hero';
import HowItWorks from '../components/home/HowItWorks';
import OurCollection from '../components/home/OurCollection';
import WhyUs from '../components/home/WhyUs';
import Nav from '../components/common/Nav';

const Home: NextPage = () => {
  return (
    <>
      <Nav />

      <main>
        <Hero
          bgImg='bg-home-hero-mobile'
          title='Great coffee made simple.'
          desc='Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.'
        >
          <button className='btn-primary'>Create your plan</button>
        </Hero>
        <OurCollection />
        <WhyUs />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
};

export default Home;
