import React from 'react';

export default function UncompromisingQuality() {
  return (
    <section
      id='uncompromising-quality-section'
      className='bg-dark-blue text-center rounded-lg relative place-items-center mt-28 pt-36 pb-16'
    >
      <img
        src='/assets/about/mobile/image-quality.jpg'
        alt='Uncompromising Quality Illustration'
        className='absolute top-[-80px] w-72 rounded-lg'
      />
      <h3 className='text-light-cream'>Uncompromising quality</h3>
      <p className='text-light-cream/75'>
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
    </section>
  );
}
