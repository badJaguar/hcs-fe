import type { NextPage } from 'next';

import { ContactUs as ContactUsComponent } from '../src/containers/contact-us';

import Base from './_base';

const ContactUs: NextPage = () => {
  return (
    <Base
      headTitle="Hermes Corporate Solutions | Contact Us"
      headElements={
        <>
          <meta name="keywords" content="Keyword1, Keyword2, Keyword3" />
          <meta name="description" content={"Contact with Hermes Corporate Solutions"} />
          <meta property="og:title" content="Hermes Corporate Solutions | Contact Us" />
          <meta property="og:description" content={'Contact with Hermes Corporate Solutions'} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          {/* <meta property="og:url" content={`${window.location.href}`} /> */}
          {/* <meta property="og:image" content={`${image.src}`} /> */}
          {/* <meta property="og:site_name" content="IMDb" /> */}
        </>
      }
    >
      <ContactUsComponent />
    </Base>
  );
};

export default ContactUs;
