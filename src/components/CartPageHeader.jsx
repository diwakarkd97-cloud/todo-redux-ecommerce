import React from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../store/shopSlice';

const CartPageHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-top-bar">
      <button 
        type="button" 
        className="products-back-btn" 
        onClick={() => dispatch(setView('home'))}
      >
        « Products
      </button>
    </div>
  );
};

export default CartPageHeader;