import type { NextPage } from 'next';

import { WHO_WE } from 'common/text/who-we';

import { Home as HomeComponent } from '../src/containers/home';

import Base from './_base';
import image from "/assets/hemes-home.png";

const Home: NextPage = () => {
  return (
    <Base
      headTitle="Hermes Corporate Solutions | Home"
      headElements={
        <>
          <meta name="keywords" content="Keyword1, Keyword2, Keyword3" />
          <meta name="description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <meta property="og:title" content="Hermes Corporate Solutions | Home" />
          <meta property="og:description" content={`${WHO_WE.CONTENT_1} ${WHO_WE.CONTENT_2}`} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`${window.location.href}`} />
          <meta property="og:image" content={`${image.src}`} />
          {/* <meta property="og:site_name" content="IMDb" /> */}
        </>
      }
    >
      <HomeComponent />
    </Base>
  );
};

export default Home;
