import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export default function Nav() {
  return (
    <nav className='justify-between items-center'>
      <Link href='/'>
        <img src='/assets/shared/desktop/logo.svg' alt='Logo' />
      </Link>
      <button className='p-0'>
        <img
          src='/assets/shared/mobile/icon-hamburger.svg'
          alt='Hamburger Menu'
        />
      </button>
    </nav>
  );
}
