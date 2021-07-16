import { Focus, Hero, Pimcore } from '../../sections';
import { Background } from '../../components';
import News from '../../sections/News/index';
import { Fragment } from 'react';
import React from 'react';

const Landing = () => {
  return (
    <Fragment>
      <Background bg="hero">
        <div className="container">
          <Hero />
        </div>
      </Background>
      <div className="container">
        <Focus></Focus>
        <Pimcore />
        <News />
      </div>
    </Fragment>
  );
};

export default Landing;
