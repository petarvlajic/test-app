import React from 'react';
import './FocusCard.scss';

const FocusCard = (props) => {
  const { heading, desc, button, img } = props;
  const className = 'card ' + img;
  return (
    <div className={className}>
      <h3>{heading}</h3>
      <p>{desc}</p>
      <button>
        {button} More
        <i class="fas fa-long-arrow-alt-right "></i>
      </button>
    </div>
  );
};

export default FocusCard;
