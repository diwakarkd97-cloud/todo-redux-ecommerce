import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../store/shopSlice';

const CardforCart = ({ item }) => {
  const dispatch = useDispatch();
  
  // Local UI state for typing quantities
  const [isCustomQty, setIsCustomQty] = useState(item.quantity >= 10);
  const [inputQty, setInputQty] = useState(item.quantity);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsCustomQty(item.quantity >= 10);
    setInputQty(item.quantity);
    if (item.quantity > 500) {
      setErrorMessage('This seller has only 500 Quantity');
    } else {
      setErrorMessage('');
    }
  }, [item.quantity]);

  const handleSelectChange = (e) => {
    const val = e.target.value;
    if (val === '10+') {
      setIsCustomQty(true);
      setInputQty(10);
      dispatch(updateQuantity({ id: item.id, quantity: 10 }));
    } else {
      const parsed = parseInt(val, 10);
      setErrorMessage('');
      dispatch(updateQuantity({ id: item.id, quantity: parsed }));
    }
  };

  const handleUpdateClick = () => {
    const val = parseInt(inputQty, 10);

    if (isNaN(val) || val <= 0) {
      dispatch(updateQuantity({ id: item.id, quantity: 0 }));
      return;
    }

    if (val > 500) {
      setErrorMessage('This seller has only 500 Quantity');
    } else {
      setErrorMessage('');
      if (val < 10) {
        setIsCustomQty(false);
      }
    }
    
    dispatch(updateQuantity({ id: item.id, quantity: val }));
  };

  const title = item.title || item.name;
  const itemTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item-row">
      <div className="cart-item-thumb-box">
        <img src={item.image} alt={title} className="cart-item-thumb" />
      </div>

      <div className="cart-item-center">
        <h4 className="cart-item-name">{title}</h4>
        <p className="cart-item-stock">In stock</p>

        <div className="cart-item-qty-row">
          {!isCustomQty ? (
            <select
              className="qty-dropdown"
              value={item.quantity <= 9 ? item.quantity : '10+'}
              onChange={handleSelectChange}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
              <option value="10+">10+</option>
            </select>
          ) : (
            <div className="custom-qty-wrapper">
              <input
                type="number"
                className="qty-number-input"
                min="1"
                value={inputQty}
                onChange={(e) => setInputQty(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUpdateClick()}
              />
              <button 
                type="button" 
                className="qty-update-btn" 
                onClick={handleUpdateClick}
              >
                Update
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="cart-item-right">
        <p className="cart-unit-price">₹{item.price.toFixed(2)}</p>

        {errorMessage && (
          <p className="cart-seller-error">{errorMessage}</p>
        )}

        <div className="cart-item-subtotal-block">
          <span className="total-label">Total:</span>
          <span className="total-val">₹{itemTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default CardforCart;