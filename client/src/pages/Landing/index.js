import React from 'react';
import { Fragment } from 'react';
import { Background } from '../../components';
import { Focus, Hero, News, Pimcore } from '../../sections';

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
