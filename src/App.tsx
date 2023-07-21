import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { FontStyles } from './FontStyles';
import { Container } from './App.styles';
// API
import { useReposFetch } from "./hooks/useReposFetch";
// Components
import Menu from "./pages/Menu";
import { Page404 } from "./pages/Page404";
// Lazy components
const Home = React.lazy(() => import("./pages/Home"));
const Game = React.lazy(() => import("./pages/Game"));
const Info = React.lazy(() => import("./pages/Info"));
const About = React.lazy(() => import("./pages/About"));
const Skills = React.lazy(() => import("./pages/Skills"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));

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
