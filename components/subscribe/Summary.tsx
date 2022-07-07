import {ReactNode} from 'react';

type SummaryProps = {
  preference: string | null;
  beanType: string | null;
  quantity: string | null;
  grindOption: string | null;
  delivery: string | null;
  children?: ReactNode;
  darkMode?: boolean;
};

type selectedOptionProps = {
  value: string | null;
};

export default function Summary(props: SummaryProps) {
  const {
    preference,
    beanType,
    quantity,
    grindOption,
    delivery,
    children,
    darkMode,
  } = props;
  const SelectedOption = (props: selectedOptionProps) => (
    <span className='text-dark-cyan'>
      {props.value ? props.value : '_____'}
    </span>
  );

  return (
    // <section id='summary-section' className='px-0 pt-0'>
    //   <div className='bg-dark-blue px-6 py-10 rounded-lg w-full flex flex-col gap-4'>
    //     <p className='uppercase text-neutral-gray'>Order Summary</p>
    //     <h4 className='text-white text-left leading-[2.5rem]'>
    //       “I drink coffee {<SelectedOption value={preference} />}, with a{' '}
    //       {<SelectedOption value={beanType} />} type of bean.{' '}
    //       {<SelectedOption value={quantity} />} ground ala{' '}
    //       {<SelectedOption value={grindOption} />}, sent to me{' '}
    //       {<SelectedOption value={delivery} />}.”
    //     </h4>
    //   </div>
    //   {children}
    // </section>
    <h4
      className={`${
        darkMode ? 'text-white' : 'text-neutral-gray'
      } text-left leading-[2.5rem]`}
    >
      “I drink coffee {<SelectedOption value={preference} />}, with a{' '}
      {<SelectedOption value={beanType} />} type of bean.{' '}
      {<SelectedOption value={quantity} />} ground ala{' '}
      {<SelectedOption value={grindOption} />}, sent to me{' '}
      {<SelectedOption value={delivery} />}.”
    </h4>
  );
}
