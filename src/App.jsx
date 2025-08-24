import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import ShoppingCart from './ShoppingCart';
import Navigation from './Navigation';
import { useCart } from './useCart';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const { cartItems, addToCart, updateQuantity, removeFromCart, getCartItemsCount } = useCart();

  const handleGetStartedClick = () => setCurrentPage('products');
  const handleHomeClick = () => setCurrentPage('landing');

  const pages = {
    landing: (
      <div className="landing-page">
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs/>
          </div>
        </div>
      </div>
    ),
    products: <ProductList addToCart={addToCart} cartItems={cartItems} />,
    cart: (
      <ShoppingCart 
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        continueShopping={() => setCurrentPage('products')}
      />
    )
  };

  return (
    <div className="app-container">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        getCartItemsCount={getCartItemsCount}
        handleHomeClick={handleHomeClick}
      />
      {pages[currentPage]}
    </div>
  );
}

export default App;
