import React from 'react';
import './Heading.scss';

const Heading = (props) => {
  const { title, subtitle, align } = props;
  const className = 'heading ' + align;
  return (
    <div className={className}>
      <span className="subtitle">{subtitle}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
