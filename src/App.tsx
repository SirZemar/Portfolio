import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
// Pages
import Home from './pages/Home';
import Skills from './pages/Skills';
// Components
import Nav from './components/Menu';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';

const App: React.FC = () => (
  <Router >
    <GlobalStyle />
    <Nav />
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  </Router>

)

export default App;
