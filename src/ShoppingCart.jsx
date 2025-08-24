import React from 'react';
import './CartItem.css';

const ShoppingCart = ({ cartItems, updateQuantity, removeFromCart, continueShopping }) => {
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + calculateTotalCost(item), 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    updateQuantity(item.name, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.name, item.quantity - 1);
    } else {
      removeFromCart(item.name);
    }
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">${item.cost.toFixed(2)}</div>
                <div className="cart-item-quantity">
                  <button 
                    className="cart-item-button cart-item-button-dec" 
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button 
                    className="cart-item-button cart-item-button-inc" 
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item).toFixed(2)}</div>
                <button 
                  className="cart-item-delete" 
                  onClick={() => removeFromCart(item.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          
          <div className="total_cart_amount">
            <h3>Total Amount: ${calculateTotalAmount()}</h3>
          </div>
        </>
      )}
      
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={continueShopping}>
          Continue Shopping
        </button>
        {cartItems.length > 0 && (
          <button className="get-started-button1" onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;