import React from 'react';
import './Background.scss';

const Background = (props) => {
  const { children, bg } = props;

  return <div className={bg}>{children}</div>;
};

export default Background;
