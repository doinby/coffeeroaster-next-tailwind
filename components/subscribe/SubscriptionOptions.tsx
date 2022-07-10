import {useState} from 'react';

import {RadioGroup} from '@headlessui/react';

import OptionCard from './OptionCard';
import OptionButton from './OptionButton';

type PushSubscriptionOptionsProps = {
  preference: string | null;
  beanType: string | null;
  quantity: string | null;
  grindOption: string | null;
  delivery: string | null;
  setPreference: Function;
  setBeanType: Function;
  setQuantity: Function;
  setGrindOption: Function;
  setDelivery: Function;
  isGrindOptionDisabled: boolean;
};

export default function SubscriptionOptions(
  props: PushSubscriptionOptionsProps
) {
  const {
    preference,
    beanType,
    quantity,
    grindOption,
    delivery,
    setPreference,
    setBeanType,
    setQuantity,
    setGrindOption,
    setDelivery,
    isGrindOptionDisabled,
  } = props;

  return (
    <section id='subscription-options-section' className='mx-0 px-0'>
      {/* Option 1/5 */}
      <OptionCard value={preference} question='How do you drink your coffee?'>
        <RadioGroup
          value={preference}
          onChange={setPreference}
          className='px-6 flex flex-col gap-4'
        >
          <RadioGroup.Option value='Capsule'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Capsule'
                desc='Compatible with Nespresso systems and similar brewers'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='Filter'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Filter'
                desc='For pour over or drip methods like Aeropress, Chemex, and V60'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='Espresso'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Espresso'
                desc='Dense and finely ground beans for an intense, flavorful experience'
              />
            )}
          </RadioGroup.Option>
        </RadioGroup>
      </OptionCard>

      {/* Option 2/5 */}
      <OptionCard value={beanType} question='What type of coffee?'>
        <RadioGroup
          value={beanType}
          onChange={setBeanType}
          className='px-6 flex flex-col gap-4'
        >
          <RadioGroup.Option value='Single origin'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Single origin'
                desc='Distinct, high quality coffee from a specific family-owned farm'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='Decaf'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Decaf'
                desc='Just like regular coffee, except the caffeine has been removed'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='Blended'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Blended'
                desc='Combination of two or three dark roasted beans of organic coffees'
              />
            )}
          </RadioGroup.Option>
        </RadioGroup>
      </OptionCard>

      {/* Option 3/5 */}
      <OptionCard value={quantity} question='How much would you like?'>
        <RadioGroup
          value={quantity}
          onChange={setQuantity}
          className='px-6 flex flex-col gap-4'
        >
          <RadioGroup.Option value='250g'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='250g'
                desc='Perfect for the solo drinker. Yields about 12 delicious cups.'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='500g'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='500g'
                desc='Perfect option for a couple. Yields about 40 delectable cups.'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='1kg'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='1kg'
                desc='Perfect for offices and events. Yields about 90 delightful cups.'
              />
            )}
          </RadioGroup.Option>
        </RadioGroup>
      </OptionCard>

      {/* Option 4/5 */}
      <OptionCard
        value={grindOption}
        question='Want us to grind them?'
        isGrindOptionDisabled={isGrindOptionDisabled}
      >
        <RadioGroup
          value={grindOption}
          onChange={setGrindOption}
          className='px-6 flex flex-col gap-4'
        >
          <RadioGroup.Option value='Wholebean'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Wholebean'
                desc='Best choice if you cherish the full sensory experience'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='Filter'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Filter'
                desc='For drip or pour-over coffee methods such as V60 or Aeropress'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='Cafetiére'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Cafetiére'
                desc='Course ground beans specially suited for french press coffee'
              />
            )}
          </RadioGroup.Option>
        </RadioGroup>
      </OptionCard>

      {/* Option 5/5 */}
      <OptionCard value={delivery} question='How often should we deliver?'>
        <RadioGroup
          value={delivery}
          onChange={setDelivery}
          className='px-6 flex flex-col gap-4'
        >
          <RadioGroup.Option value='Every week'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Every week'
                desc='$14.00 per shipment. Includes free first-class shipping.'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='Every 2 weeks'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Every 2 weeks'
                desc='$17.25 per shipment. Includes free priority shipping.'
              />
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value='Every month'>
            {({checked}) => (
              <OptionButton
                checked={checked}
                title='Every month'
                desc='$22.50 per shipment. Includes free priority shipping.'
              />
            )}
          </RadioGroup.Option>
        </RadioGroup>
      </OptionCard>
    </section>
  );
}
