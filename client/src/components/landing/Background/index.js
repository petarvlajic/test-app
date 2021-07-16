import './Background.scss';
import React from 'react';

const Background = (props) => {
  const { children, bg } = props;

  return <div className={bg}>{children}</div>;
};

export default Background;
