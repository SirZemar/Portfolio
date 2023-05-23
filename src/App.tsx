import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { FontStyles } from './FontStyles';
import { Container } from './App.styles';
// API
import { useReposFetch } from "./hooks/useReposFetch";
// Components
import Menu from './components/Menu';
import { Page404 } from "./components/Page404";
// Lazy components
const Home = React.lazy(() => import("./components/Home"));
const Game = React.lazy(() => import("./components/Game"));
const Info = React.lazy(() => import("./components/Info"));
const About = React.lazy(() => import("./components/About"));
const Skills = React.lazy(() => import("./components/Skills"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));

const App: React.FC = () => {
  const { reposCount } = useReposFetch();

  useEffect(() => {
    window.localStorage.setItem(
      "reposLength",
      reposCount ? reposCount.toString() : "0"
    );
    console.log(reposCount);
  }, [reposCount]);

  return (
    <Router>
      <style>
        @import
        url('https://fonts.cdnfonts.com/css/do-futuristic?styles=86197');
      </style>
      <GlobalStyle />
      <FontStyles />
      <Container>
        <Menu />
        <React.Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/info" element={<Info />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </React.Suspense>
      </Container>
    </Router>
  );
};

export default App;
