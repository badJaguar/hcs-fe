import React from 'react';
import type { NextPage } from 'next';

import { WHO_WE } from 'common/text/who-we';

import { Home as HomeComponent } from '../src/containers/home';
import useLocation from '../utility/useLocation';

import Base from './_base';
import image from "/assets/og-home.webp";

import { SLOGAN_1, SLOGAN_3 } from 'common/text/home';

const Home: NextPage = () => {
  const location = useLocation();

  return (
    <Base
      headTitle="Hermes Network Solutions | Home"
      headElements={
        <>
          <meta data-rh="true" name="title" content={`${SLOGAN_1} ${SLOGAN_3}`} />
          <meta data-rh="true" name="keywords" content="Keyword1, Keyword2, Keyword3" />
          <meta data-rh="true" name="description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <link data-rh="true" rel="canonical" href={location?.href} />

          <meta data-rh="true" property="og:title" content="Hermes Network Solutions | Home" />
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
      <HomeComponent />
    </Base>
  );
};

export default Home;
