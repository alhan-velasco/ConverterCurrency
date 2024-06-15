import React from 'react';
import './CurrencySelectorTo.css';

function CurrencySelectorTo({ currencies, onSelect, selected, favorites, toggleFavorite }) {
  function handleSelectChange(e) {
    onSelect(e.target.value);
  }

  return (
    <div className="currency-selector-to">
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

export default CurrencySelectorTo;
