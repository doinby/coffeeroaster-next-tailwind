import {NextPage} from 'next';

import Nav from '../components/common/Nav';
import Footer from '../components/common/Footer';
import Hero from '../components/common/Hero';
import OurCommitment from '../components/about/OurCommitment';
import UncompromisingQuality from '../components/about/UncompromisingQuality';
import OurHeadquarters from '../components/about/OurHeadquarters';

const About: NextPage = () => {
  return (
    <>
      <Nav />

      <main>
        <Hero
          bgImg='bg-about-hero-mobile'
          title='About us'
          desc='Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
  coffee from around the world. We have since been dedicated to bring the perfect cup - from 
  bean to brew - in every shipment.'
        />
        <OurCommitment />
        <UncompromisingQuality />
        <OurHeadquarters />
      </main>

      <Footer />
    </>
  );
};

export default About;
