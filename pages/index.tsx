import React, { Suspense } from 'react';
import type { NextPage } from 'next';

import { WHO_WE } from 'common/text/who-we';

import useLocation from '../utility/useLocation';

import Base from './_base';
import image from "/assets/og-home.webp";

import { SLOGAN_1, SLOGAN_3 } from 'common/text/home';
import dynamic from 'next/dynamic';

const HomeDynamic = dynamic(() => import('../src/containers/home'), {
  suspense: true,
});

const Home: NextPage = () => {
  const location = useLocation();

  return (
    <Base
      headTitle="Hermes Network Solutions | Advertisement agency"
      headElements={
        <>
          <meta data-rh="true" name="title" content={`${SLOGAN_1} ${SLOGAN_3}`} />
          <meta data-rh="true" name="keywords" content="seo agency, seo marketing, seo optimization, seo search engine optimization, digital marketing online advertising, google ads agency, online advertising, advertising website, ppc ads, online ads, website advertising, google ads marketing agency, ad for instagram" />
          <meta data-rh="true" name="description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <link data-rh="true" rel="canonical" href={location?.href} />

          <meta data-rh="true" property="og:title" content="Hermes Network Solutions | Advertisement agency" />
          <meta data-rh="true" property="og:description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <meta data-rh="true" property="og:locale" content="en_US" />
          <meta data-rh="true" property="og:type" content="article" />

          <meta property="og:image" content={`${image.src}`} />
          <meta property="og:image:width" content={`${image.width}`} />
          <meta property="og:image:height" content={`${image.height}`} />

          <meta data-rh="true" property="og:url" content={location?.hostname} />
          <meta property="og:site_name" content="Hermesolutions LLC" />
        </>
      }
    >
      <Suspense fallback="Loading">
        <HomeDynamic />
      </Suspense>
    </Base>
  );
};

export default Home;
