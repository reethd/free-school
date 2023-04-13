import './FooterStyles.css';
import React from 'react';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: 'white', marginRight: '2rem' }} />
            <div>
              <p>Based in Athens, Georgia</p>
            </div>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: 'white', marginRight: '2rem' }}
              />
              athensfreeschool@proton.me
            </h4>
          </div>
        </div>

        <div className="right">
          <h4> Free School </h4>
          <p>
            AFS is a learning network by and for the community centered around
            compassion, autonomy, and play!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
