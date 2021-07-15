import { Heading } from '../../components';
import image from '../../img/pimcore.jpeg';
import React from 'react';
import './Pimcore.scss';

const Pimcore = () => {
  return (
    <div className="pimcore">
      <div className="pimcore-picture">
        <img src={image} alt="pimcore" />
      </div>
      <div className="pimcore-info">
        <Heading
          title="Impressing our Customers"
          subtitle="Loerm ipsum"
          align="left"
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div class="text">
          <h4>
            <i class="fas fa-times-circle"></i>What is Lorem Ipsum
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <h4>
            <i class="fas fa-times-circle"></i>Why do we use it
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pimcore;
