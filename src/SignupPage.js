import React, { useState } from 'react';
import './SignupPage.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    termsAccepted: false
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const login = () => {
    navigate('/action');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    // Validate form fields
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.termsAccepted) {
      errors.terms = 'You must accept the terms';
    }

    if (Object.keys(errors).length === 0) {
      navigate('/');
    } else {
      setFormErrors(errors);
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="form-header">
          <h1>Create Your Account</h1>
          <p className="form-subtitle">Join us today and start your journey</p>
        </div>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="fullName"
              placeholder="Full Name" 
              className={`form-input ${formErrors.fullName ? 'input-error' : ''}`}
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {formErrors.fullName && <p className="error-message">{formErrors.fullName}</p>}
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              className={`form-input ${formErrors.email ? 'input-error' : ''}`}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              className={`form-input ${formErrors.password ? 'input-error' : ''}`}
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && <p className="error-message">{formErrors.password}</p>}
          </div>
          
          <div className="checkbox-container">
            <input 
              type="checkbox" 
              id="terms" 
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms">I agree to the <a href="/terms">terms</a></label>
            {formErrors.terms && <p className="error-message">{formErrors.terms}</p>}
          </div>
          
          <button type="submit" className="signup-button">Create Account</button>
          
          <div className="login-link">
            <p>Already have an account? <span onClick={login} className="login-text">Log in</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;