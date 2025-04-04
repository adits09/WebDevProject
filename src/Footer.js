import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-message">
          <h2>We'd love to hear from you!</h2>
          <p className="footer-creator">Created by Aditi Mishra 23BDS0116</p>
        </div>
        
        <div className="footer-info">
          <h3 className="footer-title">CAKE FACTORY</h3>
          
          <p className="footer-copyright">Copyright© 2021 Cake Factory</p>
          <p className="footer-rights">All rights reserved</p>
          
          <div className="footer-social">
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
            <div className="social-icon"></div>
          </div>
          
          <div className="footer-updates">
            <p>Get Updates from us :</p>
            <div className="email-input-container">
              <input 
                type="email" 
                placeholder="enter your email :)" 
                className="footer-email-input"
              />
              <button className="email-submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;