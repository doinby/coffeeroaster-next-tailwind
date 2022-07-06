import {ReactNode} from 'react';

type HeroProps = {
  bgImg: string;
  title: string;
  desc: string;

  // Optional children
  children?: ReactNode;
};

export default function Hero(props: HeroProps) {
  const {bgImg, title, desc, children} = props;

  return (
    <section
      id='hero-section'
      className={`${bgImg} bg-center bg-cover bg-no-repeat place-items-center rounded-lg`}
    >
      <h2 className='text-light-cream text-5xl'>{title}</h2>
      <p className='text-center'>{desc}</p>
      {children}
    </section>
  );
}
