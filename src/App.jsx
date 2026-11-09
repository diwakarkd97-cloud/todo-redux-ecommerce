import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const view = useSelector((state) => state.shop.view);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {view === 'home' ? <Home /> : <Cart />}
      </main>
    </div>
  );
};

export default App;