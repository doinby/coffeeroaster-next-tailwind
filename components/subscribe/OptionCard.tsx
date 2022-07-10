import {ReactNode, Fragment, useState} from 'react';
import {Disclosure, Transition} from '@headlessui/react';

type OptionCardProps = {
  value: string | null;
  question: string;
  children: ReactNode;
  isGrindOptionDisabled?: boolean;
};

export default function OptionCard(props: OptionCardProps) {
  const {value, question, children, isGrindOptionDisabled} = props;

  const [isShown, setIsShown] = useState(() =>
    isGrindOptionDisabled === true ? false : true
  );

  return (
    <Disclosure as='article'>
      <Disclosure.Button
        onClick={() => setIsShown(!isShown)}
        disabled={isGrindOptionDisabled}
        className={`${
          isGrindOptionDisabled ? 'cursor-not-allowed' : ''
        } flex items-center gap-2 justify-between w-full px-6`}
      >
        <h4 className='text-left text-neutral-gray'>
          {isGrindOptionDisabled ? 'No grind option for Capsule' : question}{' '}
          <span
            className={`${
              value === null && !isGrindOptionDisabled
                ? 'inline-block'
                : 'hidden'
            } text-red`}
          >
            *
          </span>
        </h4>
        <Transition.Child
          unmount={false}
          enter={'transform duration-300'}
          enterTo={'rotate-[-180deg]'}
          leave={'transform duration-300'}
          leaveFrom={'rotate-[180deg]'}
          className={'!block'}
        >
          <img
            src='/assets/plan/desktop/icon-arrow.svg'
            alt='Arrow Icon'
            className={`${isGrindOptionDisabled ? 'hidden' : 'block'} w-6`}
          />
        </Transition.Child>
      </Disclosure.Button>
      <Transition
        as={Fragment}
        show={isGrindOptionDisabled === true ? false : isShown}
        enter={'transition duration-100 ease-out'}
        enterFrom={'transform scale-95 opacity-0'}
        enterTo={'transform scale-100 opacity-100'}
        leave={'transition duration-100 ease-out'}
        leaveFrom={'transform scale-100 opacity-100'}
        leaveTo={'transform scale-95 opacity-0'}
      >
        <Disclosure.Panel>{children}</Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
