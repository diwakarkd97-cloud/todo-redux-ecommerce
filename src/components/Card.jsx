import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../store/shopSlice';

const Card = ({ product, isInCart }) => {
  const dispatch = useDispatch();
  const title = product.title || product.name;

  return (
    <div className="product-card">
      <div className="image-container">
        <img 
          src={product.image} 
          alt={title} 
          className="product-image" 
          loading="lazy"
        />
        <span className="category-badge">{product.category}</span>
      </div>

      <div className="product-info">
        <h3 className="product-name" title={title}>{title}</h3>

        <div className="product-rating">
          <span className="rating-star">★</span>
          <span className="rating-value">{product.rating.rate}</span>
          <span className="rating-count">({product.rating.count})</span>
        </div>

        <p className="product-price">₹{product.price}</p>

        {isInCart ? (
          <button 
            type="button" 
            className="remove-to-cart-btn" 
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            type="button" 
            className="add-to-cart-btn" 
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;