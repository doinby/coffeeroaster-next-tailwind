import StepCard from '../common/StepCard';

export default function Instruction() {
  return (
    <section
      id='instruction-section'
      className='bg-dark-blue rounded-lg mt-28 mx-0 px-5'
    >
      <StepCard
        title='01'
        subtitle='Pick your coffee'
        desc='Select from our evolving range of artisan coffees. Our beans are ethically 
  sourced and we pay fair prices for them. There are new coffees in all profiles 
  every month for you to try out.'
        isDarkMode={true}
      />
      <StepCard
        title='02'
        subtitle='Choose the frequency'
        desc='Customize your order frequency, quantity, even your roast style and grind type. 
  Pause, skip or cancel your subscription with no commitment through our online portal.'
        isDarkMode={true}
      />
      <StepCard
        title='03'
        subtitle='Receive and enjoy!'
        desc='We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
  world-class coffees curated to provide a distinct tasting experience.'
        isDarkMode={true}
      />
    </section>
  );
}
