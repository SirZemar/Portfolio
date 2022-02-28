import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
// Pages
import Home from './Home';
import Skills from './Skills';
// Components
import Nav from './components/Menu';

const App: React.FC = () => (
  <Router >
    <GlobalStyle />
    <Nav />
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/skills' element={<Skills />} />
    </Routes>
  </Router>

)

export default App;
