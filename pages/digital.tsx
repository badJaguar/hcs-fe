import type { NextPage } from 'next';

import { Digital as DigitalComponent } from '../src/containers/digital';

import Base from './_base';

const Digital: NextPage = () => {
  return (
    <Base headTitle="Hermes Corporate Solutions | SEO & Digital Advertising">
      <DigitalComponent />
    </Base>
  );
};

export default Digital;
