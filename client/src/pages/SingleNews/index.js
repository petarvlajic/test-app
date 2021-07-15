import SingeNews from '../../sections/SingeNews/index';
import { Background, Navbar } from '../../components';
import { Fragment } from 'react';
import React from 'react';

const SingleNewsPage = () => {
  return (
    <Fragment>
      <Background bg="header-bg">
        <div className="container">
          <Navbar />
        </div>
      </Background>
      <div className="container">
        <SingeNews />
      </div>
    </Fragment>
  );
};

export default SingleNewsPage;
