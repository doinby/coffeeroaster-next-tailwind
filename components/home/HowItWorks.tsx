import StepCard from './StepCard';

export default function HowItWorks() {
  return (
    <section id='how-it-works' className='place-items-center'>
      <h4 className='text-neutral-gray'>How it works</h4>
      <StepCard
        title='01'
        subtitle='Pick your coffee'
        desc='Select from our evolving range of artisan coffees. Our beans are ethically 
  sourced and we pay fair prices for them. There are new coffees in all profiles 
  every month for you to try out.'
      />
      <StepCard
        title='02'
        subtitle='Choose the frequency'
        desc='Customize your order frequency, quantity, even your roast style and grind type. 
  Pause, skip or cancel your subscription with no commitment through our online portal.'
      />
      <StepCard
        title='03'
        subtitle='Receive and enjoy!'
        desc='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
  world-class coffees curated to provide a distinct tasting experience.'
      />
      <button className='btn-primary'>Create your plan</button>
    </section>
  );
}
