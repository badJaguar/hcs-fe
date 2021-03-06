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
        <meta data-rh="true" name="viewport" user-scalable="yes" content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=5" />
        <meta data-rh="true" name="robots" content="index,follow,max-image-preview:large" />
        <meta data-rh="true" name="referrer" content="unsafe-url" />

        <link data-rh="true" rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
        <link data-rh="true" rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
        <link data-rh="true" rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
        <link data-rh="true" rel="manifest" href="/fav/site.webmanifest" />
        <link data-rh="true" rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#5bbad5" />
        <meta data-rh="true" name="msapplication-TileColor" content="#da532c" />
        <meta data-rh="true" name="theme-color" content="#ffffff" />

        <meta data-rh="true" name="og:latitude" content="26.202160" />
        <meta data-rh="true" name="og:longitude" content="-80.163660" />
        <meta data-rh="true" name="og:street-address" content="1500 W Cypress Creek Rd #201" />
        <meta data-rh="true" name="og:locality" content="Fort Lauderdale" />
        <meta data-rh="true" name="og:region" content="FL" />
        <meta data-rh="true" name="og:postal-code" content="33309" />
        <meta data-rh="true" name="og:country-name" content="USA" />
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
