import {Dialog} from '@headlessui/react';
import Summary from './Summary';

type SummaryModalProps = {
  isOpen: boolean;
  setIsOpen: Function;
  preference: string | null;
  beanType: string | null;
  quantity: string | null;
  grindOption: string | null;
  delivery: string | null;
};

export default function SummaryModal(props: SummaryModalProps) {
  const {
    isOpen,
    setIsOpen,
    preference,
    beanType,
    quantity,
    grindOption,
    delivery,
  } = props;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='bg-dark-blue/75 fixed w-screen h-screen top-0 left-0 flex place-items-center'
    >
      <Dialog.Panel className='bg-light-cream mx-2 rounded-lg'>
        <Dialog.Title
          as='h3'
          className='text-white bg-dark-blue text-left p-6 rounded-t-lg'
        >
          Order Summary
        </Dialog.Title>
        <Dialog.Description as='div' className='p-6'>
          <Summary
            preference={preference}
            beanType={beanType}
            quantity={quantity}
            grindOption={grindOption}
            delivery={delivery}
            darkMode={false}
          />
          <small>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </small>
        </Dialog.Description>

        {/* <button onClick={() => setIsOpen(false)}>Cancel</button> */}
      </Dialog.Panel>
    </Dialog>
  );
}
