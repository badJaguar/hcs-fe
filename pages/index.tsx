import type { NextPage } from 'next';

import { Home as HomeComponent } from '../src/containers/home';

import Base from './_base';

const Home: NextPage = () => {
  return (
    <Base
      headTitle="Hermes Corporate Solutions | Home"
    >
      <HomeComponent />
    </Base>
  );
};

export default Home;
