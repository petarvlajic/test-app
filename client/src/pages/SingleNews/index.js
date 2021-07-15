import { Background, Navbar } from '../../components';
import { Fragment } from 'react';
import React from 'react';

const SingleNews = () => {
  return (
    <Fragment>
      <Background bg="header-bg">
        <div className="container">
          <Navbar />
        </div>
      </Background>
      <div className="container">
        <SingleNews />
      </div>
    </Fragment>
  );
};

export default SingleNews;
