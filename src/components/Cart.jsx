import React from 'react';
import { useSelector } from 'react-redux';
import CartPageHeader from './CartPageHeader'; // Fixed path
import CardforCart from './CardforCart'; // Fixed path

const Cart = () => {
  const cartItems = useSelector((state) => state.shop.cart);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page-container">
      <CartPageHeader />

      {cartItems.length === 0 ? (
        <div className="empty-cart-view">
          <p className="empty-cart-message">No products selected!</p>
        </div>
      ) : (
        <div className="cart-items-wrapper">
          {cartItems.map((item) => (
            <CardforCart
              key={item.id}
              item={item}
            />
          ))}
        </div>
      )}

      <div className="cart-summary-footer">
        <div className="summary-breakdown-row">
          <div className="summary-breakdown-labels">
            <p>SUBTOTAL:</p>
            <p>TOTAL QUANTITY:</p>
            <p>SHIPPING:</p>
          </div>
          <div className="summary-breakdown-values">
            <p>₹{subtotal.toFixed(2)}</p>
            <p>{totalQuantity}</p>
            <p>FREE</p>
          </div>
        </div>

        <div className="summary-divider-line"></div>

        <div className="summary-grand-total-row">
          <span className="grand-total-label">TOTAL:</span>
          <span className="grand-total-val">₹{subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;