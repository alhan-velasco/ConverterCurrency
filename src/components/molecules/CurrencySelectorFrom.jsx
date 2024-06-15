import React from 'react';
import './CurrencySelectorFrom.css';

function CurrencySelectorFrom({ currencies, onSelect, selected, favorites, toggleFavorite }) {
  function handleSelectChange(e) {
    onSelect(e.target.value);
  }

  return (
    <div className="currency-selector-from">
      <select onChange={handleSelectChange} value={selected}>
        {favorites.length > 0 && (

          <optgroup label="Favorites">
            {favorites.map((currency) => (
              <option key={currency} value={currency}>
                {currency} ⭐
              </option>
            ))}
          </optgroup>
        )}
        <optgroup label="All Currencies">
          {Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </optgroup>
      </select>
      <button onClick={() => toggleFavorite(selected)}>
        {favorites.includes(selected) ? '★' : '☆'}
      </button>
    </div>
  );
}

export default CurrencySelectorFrom;
