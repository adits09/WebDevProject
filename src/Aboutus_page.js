import React from 'react';
import Footer from '../src/Footer';
import './Aboutus_page.css';
import BAKERY from './BAKERY.jpg'; 
import { useNavigate } from 'react-router-dom';
import Ourproduct_0116 from './Ourproduct_0116';

function AboutusPage() {
  const navigate = useNavigate();
    const Aboutus_page = () => {
      navigate('/action1');
    };
    const ShopNow = () => {
      navigate('/shop');
    };
  return (
    <div className="aboutus-container">
      <main className="main-content">
        <div className="left-section">
          <div className="image-frame">
            <img src={BAKERY} alt="Person holding bread loaves" />
          </div>
        </div>
        <div className="right-section">
          <h2 className="story-title">OUR STORY</h2>
          <p className="story-text">
            Welcome to CAKE FACTORY, where every bite tells a story of love, passion, and perfection! 
            We believe in baking with the finest ingredients, creating freshly made breads, cakes, 
            and pastries that bring joy to every occasion. Whether you're craving a classic treat 
            or something uniquely handcrafted, our bakery is dedicated to delivering flavors that 
            feel like home. Shop with us to indulge in the sweet side of life!
          </p>
          <button className="shop-button" onClick={ShopNow}>SHOP NOW</button>
        </div>
      </main>
      <Ourproduct_0116 />
      <Footer />
    </div>
  );
}

export default AboutusPage;