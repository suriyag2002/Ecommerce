import React from 'react';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Set the favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Add other head elements if needed */}
      </Head>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </>
  );
}

export default MyApp;
