import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-heading">
        <span>Lorem ipsum is simple?</span>
        <h1>
          Contact us.
          <br />
          Let's Talk.
        </h1>
      </div>
      <div class="footer-resource">
        <h2 className="footer-heading">Resource</h2>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Home</li>
        </ul>
      </div>

      <div class="footer-text">
        <h2 className="footer-heading">Where we are</h2>
        <p>
          <i class="fas fa-compass"></i> Veljka Dugosevica 54,
          <br />
          Beograd 11050
        </p>
      </div>

      <div class="footer-info">
        <h2 className="footer-heading">Our Contact Info</h2>
        <p>
          <i class="fas fa-compass"></i> info@asioso.com
        </p>
        <p>
          <i class="fas fa-phone-alt"></i> +381631291415
        </p>
      </div>
    </div>
  );
};

export default Footer;
