import React from 'react';

const Banner = ({ onExploreClick }) => {
  return (
    <section className="banner">
      {/* Left Side: Text and Call to Action */}
      <div className="banner-content">
        <span className="banner-tag">📚 Curated Reader's Collection</span>
        <h2 className="banner-title">Find Your Next Great Read</h2>
        <p className="banner-subtitle">
          Explore bestsellers across fiction, personal finance, self-help, and technology.
        </p>
        
        <div className="banner-actions">
          <button 
            type="button" 
            className="banner-cta-btn" 
            onClick={onExploreClick}
          >
            Explore Books
          </button>
        </div>
      </div>

      {/* Right Side: Optional Hero Image (Uncomment to use) */}
      {/* 
      <div className="banner-image-container">
        <img 
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop" 
          alt="Stack of aesthetic books" 
          className="banner-hero-image"
          loading="lazy"
        />
      </div> 
      */}
    </section>
  );
};

export default Banner;