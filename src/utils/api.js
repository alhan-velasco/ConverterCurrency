const API_URL = 'https://v6.exchangerate-api.com/v6/7f22943ff9ed7b9821d0c7fc/latest/USD';

export async function fetchExchangeRates() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.conversion_rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return null;
  }
}
