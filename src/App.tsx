import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Container } from './App.styles';
// API
import { useReposFetch } from "./hooks/useReposFetch";
// Components
import Menu from './components/Menu';
// Lazy components
const Home = React.lazy(() => import('./components/Home'));
const Contacts = React.lazy(() => import('./components/Contacts'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));

const App: React.FC = () => {

  const { reposCount } = useReposFetch();

  useEffect(() => {
    window.localStorage.setItem('reposLength', reposCount ? reposCount.toString() : '0');
    console.log(reposCount)
  }, [reposCount])

  return (
    <Router >
      <GlobalStyle />
      <Container>
        <Menu />
        <React.Suspense fallback={<h1>Page is loading........</h1>}>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </React.Suspense>
      </Container>
    </Router>

  )
}

export default App;
