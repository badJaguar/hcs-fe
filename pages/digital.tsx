import { MAIN_BANNER } from 'containers/digital/utils/constants';
import type { NextPage } from 'next';

import { Digital as DigitalComponent } from '../src/containers/digital';
import useLocation from '../utility/useLocation';

import Base from './_base';

import image from '/assets/i-mac.png';

const Digital: NextPage = () => {
  const location = useLocation();

  return (
    <Base
      headTitle="Hermes Network Solutions | SEO & Digital Advertising"
      headElements={
        <>
          <meta data-rh="true" name="title" content="Digital Advertising" />
          <meta data-rh="true" name="keywords" content="Keyword1, Keyword2, Keyword3" />
          <meta data-rh="true" name="description" content={MAIN_BANNER.SUBTITLE} />
          <link data-rh="true" rel="canonical" href={location?.href} />

          <meta data-rh="true" property="og:title" content="Digital Advertising" />
          <meta data-rh="true" property="og:description" content={MAIN_BANNER.SUBTITLE} />
          <meta data-rh="true" property="og:locale" content="en_US" />
          <meta data-rh="true" property="og:type" content="article" />
          <meta data-rh="true" property="og:url" content={location?.href} />
          <meta data-rh="true" property="og:image" content={`${image.src}`} />
          <meta property="og:site_name" content="Hermesolutions LLC" />
        </>
      }
    >
      <DigitalComponent />
    </Base>
  );
};

export default Digital;
