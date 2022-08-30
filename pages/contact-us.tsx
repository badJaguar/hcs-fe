import type { NextPage } from 'next';
import React, { Suspense } from 'react';

import useLocation from '../utility/useLocation';

import image from '/assets/free-icon-mail.png';

import Base from './_base';
import dynamic from 'next/dynamic';

const DynamicContactUs = dynamic(() => import('../src/containers/contact-us'), {
  suspense: true,
});

const ContactUs: NextPage = () => {
  const location = useLocation();

  return (
    <Base
      headTitle="Hermes Network Solutions | Contact Us"
      headElements={
        <>
          <meta data-rh="true" name="title" content="Contact with Hermes Network Solutions" />
          <meta data-rh="true" name="keywords" content="instagram advertising, nstagram ads management, social media advertising instagram, acebook and instagram marketing agency, google my business optimization service, retargeting ads, retargeted advertising, retargeting campaign, social media retargeting" />
          <meta data-rh="true" name="description" content="Contact with Hermes Network Solutions" />
          <link data-rh="true" rel="canonical" href={location?.href} />

          <meta data-rh="true" property="og:title" content="Hermes Network Solutions | Contact Us" />
          <meta data-rh="true" property="og:description" content={'Contact with Hermes Network Solutions'} />
          <meta data-rh="true" property="og:locale" content="en_US" />
          <meta data-rh="true" property="og:type" content="article" />
          <meta data-rh="true" property="og:url" content={location?.href} />
          <meta data-rh="true" property="og:image" content={`${image.src}`} />
          <meta property="og:site_name" content="Hermesolutions LLC" />
        </>
      }
    >
      <Suspense fallback="Loading">
        <DynamicContactUs />
      </Suspense>
    </Base>
  );
};

export default ContactUs;
