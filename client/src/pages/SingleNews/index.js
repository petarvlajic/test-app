import { Background, Navbar } from '../../components';
import { Fragment } from 'react';
import React from 'react';
import SingeNews from '../../sections/SingeNews/index';

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
