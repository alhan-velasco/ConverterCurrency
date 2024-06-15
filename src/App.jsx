import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
