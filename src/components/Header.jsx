import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setView } from '../store/shopSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { cart, view: currentView } = useSelector((state) => state.shop);
  
  // Calculate cart count directly from the Redux state
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section" onClick={() => dispatch(setView('home'))}>
          <span className="logo">logo</span>
        </div>

        <nav>
          <ul className="navl">
            <li>
              <button 
                type="button" 
                className={`nav-btn ${currentView === 'home' ? 'active' : ''}`}
                onClick={() => dispatch(setView('home'))}
              >
                Home
              </button>
            </li>
            <li>
              <button type="button" className="nav-btn">About</button>
            </li>
            <li>
              <button 
                type="button" 
                className={`nav-btn ${currentView === 'home' ? 'active' : ''}`}
                onClick={() => dispatch(setView('home'))}
              >
                Shop
              </button>
            </li>
          </ul>
        </nav>

        <div 
          className="cart-container" 
          onClick={() => dispatch(setView('cart'))} 
          title="View Shopping Cart"
        >
          <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;