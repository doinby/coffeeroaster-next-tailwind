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
    // <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    //   <Dialog.Panel>
    //     <Dialog.Title as='h3'>Order Summary</Dialog.Title>
    //     <p>Hello</p>
    //     {/* <Dialog.Description>Hello</Dialog.Description> */}
    //   </Dialog.Panel>
    // </Dialog>
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='bg-dark-blue/20 fixed w-screen h-screen top-0 left-0 flex place-items-center'
    >
      <Dialog.Panel className='bg-light-cream mx-6 rounded-lg'>
        <Dialog.Title as='h3' className='text-white bg-dark-blue text-left p-6'>
          Order Summary
        </Dialog.Title>
        {/* <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description> */}

        {/* <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p> */}
        <Dialog.Description className='p-6'>
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

        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
}
