import React from 'react';
import './Contact_0116.css';
import { useNavigate } from 'react-router-dom';
import Header from '../src/Header';
import Aboutus_page from '../src/Aboutus_page'
function Contact_0116() {
  
  return (
    <div>
    <Header />
    <div className="contact-container">
      <div className="left-panel">
        <div className="left-content">
          <div className="section-header">
            <h1 className="script-heading">We'd love to hear from you</h1>
            <p className="intro-text left-intro">
              Feel free to reach out if you want to <br></br>
              give us some suggestions or simply have a chat
            </p>
          </div>
          
          <div className="section-divider">
            <div className="divider-line"></div>
          </div>
          
          <div className="section-header">
            <h2 className="join-text">Join us!</h2>
            <p className="dream-text">Let's Make Your Dream A Reality</p>
          </div>
        </div>
      </div>
      
      <div className="right-panel">
        <div className="right-sections">
          
          <div className="contact-section">
            <div className="right-content">
              <div className="contact-info">
                <a href="mailto:contact@cakefactory.com" className="contact-email">
                  CONTACT@CAKEFACTORY.COM
                </a>
                <div className="contact-address">
                  <p>CAKE FACTORY HQ</p>
                  <p>123 SWEET STREET</p>
                  <p>NEW YORK, NY 10001</p>
                  <a href="https://maps.google.com" className="contact-map">
                    VIEW MAP →
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-visual-divider">
            <div className="divider-line"></div>
          </div>
          
          <div className="join-section">
            <div className="right-content">
              <form className="contact-form">
                <div className="form-container">
                  <div className="form-columns">
                    <div className="form-left">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="secondName">Last Name:</label>
                        <input type="text" id="secondName" name="secondName" />
                      </div>
                    </div>
                    
                    <div className="form-right">
                      <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">EMAIL:</label>
                        <input type="email" id="email" name="email" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Contact_0116;