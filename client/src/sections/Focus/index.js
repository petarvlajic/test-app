import { FocusCard, Heading } from '../../components';
import React from 'react';
import './Focus.scss';

const Focus = () => {
  return (
    <div className="focus">
      <Heading title="Our Focus" subtitle="Lorem ipsum test"></Heading>
      <div class="focus-cards">
        <FocusCard
          heading="Customer"
          desc="Lorem Ipsum is simply dummy"
          button="Read"
          img="customer"
        ></FocusCard>
        <FocusCard
          heading="Content"
          desc="It is a long established fact that"
          button="Explore"
          img="content"
        ></FocusCard>
        <FocusCard
          heading="Touchpoints"
          desc="There are many variations "
          button="Learn"
          img="touch"
        ></FocusCard>
      </div>
    </div>
  );
};

export default Focus;
