import Footer from 'common/footer';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { MainStyled } from '../styles/styled';

interface BaseProps {
  children: React.ReactNode;
  headTitle: string;
  headElements?: React.ReactNode;
}

const Base: NextPage<BaseProps> = ({ headTitle, children, headElements }: BaseProps) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta data-rh="true" name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1" />
        <meta data-rh="true" name="robots" content="index,follow,max-image-preview:large" />
        <meta data-rh="true" name="referrer" content="unsafe-url" />

        <link data-rh="true" rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
        <link data-rh="true" rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link data-rh="true" rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link data-rh="true" rel="icon" href="/hermes-logo-head.svg" />
        <link data-rh="true" rel="manifest" href="/fav/site.webmanifest" />
        <link data-rh="true" rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#5bbad5" />
        <meta data-rh="true" name="msapplication-TileColor" content="#da532c" />
        <meta data-rh="true" name="theme-color" content="#ffffff" />
        {headElements}
      </Head>
      <MainStyled>
        {children}
      </MainStyled>
      <Footer />
    </>
  );
};

export default Base;
