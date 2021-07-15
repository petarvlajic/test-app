import ModalVideo from 'react-modal-video';
import { Navbar } from '../../components';
import React, { useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Navbar></Navbar>
      <div class="hero-text">
        <h1>
          We make digital <br />
          business simple
        </h1>
        <p>
          In everything we do, we simply want to inspire people. Through our
          ideas we strengthen brand and inspire their customers. We create great
          digital experiences for your visitors
        </p>
        <div class="hero-buttons">
          <button class="explore-btn">
            Explore More<i class="fas fa-long-arrow-alt-right"></i>
          </button>

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="8DeEb7wU4-Y"
            onClose={() => setOpen(false)}
          />
          <div className="watch-video" onClick={() => setOpen(true)}>
            <i class="fas fa-play-circle fa-2x"></i>
            <span>Watch Video</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
