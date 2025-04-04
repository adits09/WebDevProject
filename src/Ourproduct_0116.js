import React from 'react';
import './Ourproduct_0116.css';
import tiramisu from './tiramisu.jpg'; 
import craftedwithcare from './craftedwithcare.jpg';
const Ourproduct_0116 = () => {
  return (
    <div className="gradient-background"> 
      <div className="product-sourcing-container">
        <div className="section top-section">
          <div className="content-wrapper">
            <div className="text-content">
              <h2>How We Source Our Products</h2>
              <p>
                We carefully select high-quality, ethically sourced ingredients from trusted suppliers 
                who share our commitment to authenticity and sustainability. Every product is crafted 
                with natural, responsibly harvested materials, ensuring freshness and premium taste
              </p>
            </div>
            <div className="image-wrapper">
              <img src={tiramisu} alt="Stack of pancakes with berries" />
            </div>
          </div>
        </div>
        
        <div className="section bottom-section">
          <div className="content-wrapper">
            <div className="image-wrapper">
              <img src={craftedwithcare} alt="Pancakes with berries on a plate" />
            </div>
            <div className="text-content">
              <h2>Crafted with care</h2>
              <p>
                We believe in creating products that are not only delicious but also ethically made. Our 
                commitment to authenticity and animal-friendly practices ensures that every 
                ingredient is responsibly sourced and free from any harm to animals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourproduct_0116;