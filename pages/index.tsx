import React from 'react';
import type { NextPage } from 'next';

import { WHO_WE } from 'common/text/who-we';

import { Home as HomeComponent } from '../src/containers/home';
import useLocation from '../utility/useLocation';

import Base from './_base';
import image from "/assets/hermes-home.jpg";
import { SLOGAN_1, SLOGAN_2 } from 'common/text/home';

const Home: NextPage = () => {
  const location = useLocation();

  return (
    <Base
      headTitle="Hermes Corporate Solutions | Home"
      headElements={
        <>
          <meta data-rh="true" name="title" content={`${SLOGAN_1} ${SLOGAN_2}`} />
          <meta data-rh="true" name="keywords" content="Keyword1, Keyword2, Keyword3" />
          <meta data-rh="true" name="description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <link data-rh="true" rel="canonical" href={location?.href} />

          <meta data-rh="true" property="og:title" content="Hermes Corporate Solutions | Home" />
          <meta data-rh="true" property="og:description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <meta data-rh="true" property="og:locale" content="en_US" />
          <meta data-rh="true" property="og:type" content="article" />

          {/* og for company location */}
          <meta data-rh="true" name="og:latitude" content="37.416343" />
          <meta data-rh="true" name="og:longitude" content="-122.153013" />
          <meta data-rh="true" name="og:street-address" content="1601 S California Ave" />
          <meta data-rh="true" name="og:locality" content="Palo Alto" />
          <meta data-rh="true" name="og:region" content="CA" />
          <meta data-rh="true" name="og:postal-code" content="94304" />
          <meta data-rh="true" name="og:country-name" content="USA" />

          <meta data-rh="true" property="og:url" content={location?.hostname} />
          <meta data-rh="true" property="og:image" content={`${image.src}`} />
          {/* <meta property="og:site_name" content="IMDb" /> */}
        </>
      }
    >
      <HomeComponent />
    </Base>
  );
};

export default Home;
