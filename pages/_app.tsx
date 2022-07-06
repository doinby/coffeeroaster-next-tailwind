import Head from 'next/head';
import type {AppProps} from 'next/app';
import './globals.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Coffeeroaster | DIY coffee subscription plan</title>
        <meta
          name='description'
          content='Making coffee bean top-up easy since 1983'
        />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
