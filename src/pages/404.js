import NotFoundBox from '@/Components/Pages/NotFoundBox/NotFoundBox';
import Head from 'next/head';
import React from 'react';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="My page 404 description" />

      </Head>
      <NotFoundBox />
    </>
  );
}

export default NotFound;
