import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signup'); 
  };
  const ShopNow=()=>{
    navigate('/shop');
  }
  const Home=()=>{
    navigate('/');
  }
  const ContactUs=()=>{
    navigate('/contact');
  }

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">CAKE FACTORY</h1>
      </div>
      
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item active" onClick={Home}><a href="#">Home</a></li>
          <li className="nav-item" onClick={ShopNow}><a href="#">Shop</a></li>
          <li className="nav-item" onClick={ContactUs}><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      
      <div className="user-actions">
        <button className="sign-in-btn" onClick={handleSignInClick}>
          Sign In
        </button>
        <button className="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span className="cart-count">0</span>
        </button>
      </div>
    </header>
  );
}

export default Header;