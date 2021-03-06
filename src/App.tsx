import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Container } from './App.styles';
// Components
import Home from './components/Home';
import Skills from './components/Skills';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import About from './components/About';

const App: React.FC = () => (
  <Router >
    <GlobalStyle />
    <Container>
      <Menu />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Container>
  </Router>

)

export default App;
