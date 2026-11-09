import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';


const ProductsContainer = () => {
  const { products, cart } = useSelector((state) => state.shop);

  return (
    <div className="products-grid">
      {products.map((product) => {
        const isInCart = cart.some((item) => item.id === product.id);   
        
        return (
          <Card
            key={product.id}
            product={product}
            isInCart={isInCart}
          />
        );
      })}
    </div>
  );
};

export default ProductsContainer;