import type { NextPage } from 'next';
import React from 'react';

import { ContactUs as ContactUsComponent } from '../src/containers/contact-us';
import useLocation from '../utility/useLocation';

import image from '/assets/free-icon-mail.png';

import Base from './_base';

const ContactUs: NextPage = () => {
  const location = useLocation();

  return (
    <Base
      headTitle="Hermes Corporate Solutions | Contact Us"
      headElements={
        <>
          <meta data-rh="true" name="title" content="Contact with Hermes Corporate Solutions" />
          <meta data-rh="true" name="keywords" content="Keyword1, Keyword2, Keyword3" />
          <meta data-rh="true" name="description" content={"Contact with Hermes Corporate Solutions"} />
          <link data-rh="true" rel="canonical" href={location?.href} />

          <meta data-rh="true" property="og:title" content="Hermes Corporate Solutions | Contact Us" />
          <meta data-rh="true" property="og:description" content={'Contact with Hermes Corporate Solutions'} />
          <meta data-rh="true" property="og:locale" content="en_US" />
          <meta data-rh="true" property="og:type" content="article" />
          <meta data-rh="true" property="og:url" content={location?.href} />
          <meta data-rh="true" property="og:image" content={`${image.src}`} />
          {/* <meta property="og:site_name" content="IMDb" /> */}
        </>
      }
    >
      <ContactUsComponent />
    </Base>
  );
};

export default ContactUs;
