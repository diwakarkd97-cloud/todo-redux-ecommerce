import React from 'react';
import { useSelector } from 'react-redux';
import ProductsContainer from './ProductsContainer'; // Fixed path

const MyContent = () => {
  const products = useSelector((state) => state.shop.products);

  return (
    <section id="products-section" className="my-content-section">
      <div className="section-header">
        <h2 className="section-title">Trending Books</h2>
        <p className="section-subtitle">Showing {products.length} handpicked titles</p>
      </div>

      <ProductsContainer />
    </section>
  );
};

export default MyContent;