import React from 'react';
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate('/action');
  };
  const GoHome=()=>{
    navigate('/');
  };
  
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="form-header">
          <h1>Create Your Account</h1>
          <p className="form-subtitle">Join us today and start your journey</p>
        </div>
        
        <form className="signup-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="form-input"
            />
          </div>
          
          <div className="checkbox-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I agree to the <a href="/terms">terms</a></label>
          </div>
          
          <button type="submit" className="signup-button" onClick={GoHome}>Create Account</button>
          
          <div className="login-link">
            <p>Already have an account? <span onClick={login} className="login-text">Log in</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;