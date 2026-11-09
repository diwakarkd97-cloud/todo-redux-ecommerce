import React from 'react';
import Banner from './Banner'; // Fixed path
import MyContent from './MyContent'; // Fixed path

const Home = () => {
  const handleScrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <Banner onExploreClick={handleScrollToProducts} />
      <MyContent />
    </div>
  );
};

export default Home;