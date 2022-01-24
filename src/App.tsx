import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
// Components
import Home from './Home';

const App: React.FC = () => (
  <Router>
    <Home />
    <GlobalStyle />
  </Router>

)

export default App;
