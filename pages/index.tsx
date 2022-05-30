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
      headTitle="Hermes Corporate Solutions | Home"
      headElements={
        <>
          <meta data-rh="true" name="title" content={`${SLOGAN_1} ${SLOGAN_3}`} />
          <meta data-rh="true" name="keywords" content="Keyword1, Keyword2, Keyword3" />
          <meta data-rh="true" name="description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <link data-rh="true" rel="canonical" href={location?.href} />

          <meta data-rh="true" property="og:title" content="Hermes Corporate Solutions | Home" />
          <meta data-rh="true" property="og:description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <meta data-rh="true" property="og:locale" content="en_US" />
          <meta data-rh="true" property="og:type" content="article" />

          {/* og for company location */}
          <meta data-rh="true" name="og:latitude" content="26.202160" />
          <meta data-rh="true" name="og:longitude" content="-80.163660" />
          <meta data-rh="true" name="og:street-address" content="1500 W Cypress Creek Rd #201" />
          <meta data-rh="true" name="og:locality" content="Fort Lauderdale" />
          <meta data-rh="true" name="og:region" content="FL" />
          <meta data-rh="true" name="og:postal-code" content="33309" />
          <meta data-rh="true" name="og:country-name" content="USA" />

          <meta property="og:image" content={`${image.src}`} />
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
