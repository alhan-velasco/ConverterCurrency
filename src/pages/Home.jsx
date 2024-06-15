import React from 'react';
import CurrencyConverter from '../components/organisms/CurrencyConverter';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Alhan's Converter</h1>
      <CurrencyConverter />
      <footer className="footer">
        <p>Gracias por preferir Alhan's Converter</p>
      </footer>
    </div>
  );
}

export default Home;
