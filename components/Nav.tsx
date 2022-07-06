/* eslint-disable @next/next/no-img-element */
export default function Nav() {
  return (
    <nav className='justify-between items-center'>
      <img src='/assets/shared/desktop/logo.svg' alt='Logo' />
      <button className='p-0'>
        <img
          src='/assets/shared/mobile/icon-hamburger.svg'
          alt='Hamburger Menu'
        />
      </button>
    </nav>
  );
}
