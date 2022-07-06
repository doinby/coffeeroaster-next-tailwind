import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-dark-blue mx-4 px-4 py-16 mb-16 flex flex-col gap-10 place-items-center'>
      <img
        src='/assets/shared/desktop/logo-inverted.png'
        alt='Coffeeroaster'
        className='h-6 w-auto'
      />
      <div id='footer-links' className='flex flex-col gap-6 text-center'>
        <Link href='/'>
          <a className='footer-nav-link'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='footer-nav-link'>About Us</a>
        </Link>
        <Link href='/createplan'>
          <a className='footer-nav-link'>Create your plan</a>
        </Link>
      </div>
      <div id='social-media' className='flex gap-6'>
        <Link href=''>
          <img src='/assets/shared/desktop/icon-facebook.svg' alt='Facebook' />
        </Link>
        <Link href=''>
          <img src='/assets/shared/desktop/icon-twitter.svg' alt='Twitter' />
        </Link>
        <Link href=''>
          <img
            src='/assets/shared/desktop/icon-instagram.svg'
            alt='Instagram'
          />
        </Link>
      </div>
    </footer>
  );
}
