import React, { useState, useEffect } from 'react';
import CurrencySelectorFrom from '../molecules/CurrencySelectorFrom';
import CurrencySelectorTo from '../molecules/CurrencySelectorTo';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { fetchExchangeRates } from '../../utils/api';
import './CurrencyConverter.css';

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('MXN');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    fetchExchangeRates().then(data => {
      setCurrencies(data);
      setExchangeRates(data);
    });
  }, []);

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleFromCurrencyChange(currency) {
    setFromCurrency(currency);
  }

  function handleToCurrencyChange(currency) {
    setToCurrency(currency);
  }

  function handleConvert() {
    const amountToConvert = parseFloat(amount);
    if (!isNaN(amountToConvert)) {
      const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      setResult((amountToConvert * rate).toFixed(2));
    } else {
      setResult('');
    }
  }

  function toggleFavorite(currency) {
    if (favorites.includes(currency)) {
      setFavorites(favorites.filter(fav => fav !== currency));
    } else {
      setFavorites([...favorites, currency]);
    }
  }

  return (
    <div className="converter-container">
      <h2>Conversor de monedas</h2>
      <div id='forms'>
      <div className="converter-fields">
        <CurrencySelectorFrom
          currencies={currencies}
          onSelect={handleFromCurrencyChange}
          selected={fromCurrency}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <Input value={amount} onChange={handleAmountChange} placeholder="Ingrese cantidad" />
      </div>
      <div className="converter-fields">
        <CurrencySelectorTo
          currencies={currencies}
          onSelect={handleToCurrencyChange}
          selected={toCurrency}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <Input value={result} disabled />

      </div>
      </div>
      <Button onClick={handleConvert}>Convertir</Button>
    </div>
  );
}

export default CurrencyConverter;
