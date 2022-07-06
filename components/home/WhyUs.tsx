import FeatureCard from './FeatureCard';

export default function WhyUs() {
  return (
    <section
      id='why-us-section'
      className='bg-dark-blue text-center place-items-center rounded-lg grid grid-flow-row'
    >
      <h3 className='text-light-cream'>Why choose us?</h3>
      <p className='text-light-cream'>
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      <div className='relative w-full py-[240px]'>
        <div className='flex flex-col gap-10 absolute top-0'>
          <FeatureCard
            imgUrl='/assets/home/desktop/icon-coffee-bean.svg'
            title='Best quality'
            desc='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
          />
          <FeatureCard
            imgUrl='/assets/home/desktop/icon-gift.svg'
            title='Exclusive benefits'
            desc='Special offers and swag when you subscribe, including 30% off your first shipment.'
          />
          <FeatureCard
            imgUrl='/assets/home/desktop/icon-truck.svg'
            title='Free shipping '
            desc='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
          />
        </div>
      </div>
    </section>
  );
}
