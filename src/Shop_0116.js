import React from 'react';
import './Shop_0116.css';
import Header from '../src/Header';
const Shop = () => {
  const productImages = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814', 
      alt: 'Strawberry dessert with layers' 
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777', 
      alt: 'Strawberry shortcake dessert' 
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81', 
      alt: 'Strawberry pastry with cream' 
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187', 
      alt: 'Strawberry layer cake' 
    },
    { 
      id: 5, 
      src: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e', 
      alt: 'Chocolate cake with berries' 
    },
    { 
      id: 6, 
      src: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e', 
      alt: 'Strawberry napoleon dessert' 
    },
  ];
  return (
    <div>
      <Header />
   
    <div className="shop-container">
      
      <header className="shop-header">
        <h1 className="shop-heading">Crafted for your cravings</h1>
      </header>
      
      <div className="product-grid">
        {productImages.map((image, index) => (
          <div 
            key={image.id} 
            className={`product-card ${index === 2 ? 'highlighted' : ''}`}
          >
            <div className="product-image-container">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="product-image" 
              />
              <p className="placeholder-text">Add to cart</p>
              <button className="add-button">
                <span>+</span>
              </button>
              <div className="product-overlay">
                <p className="product-title">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Shop;