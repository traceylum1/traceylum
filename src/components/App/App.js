import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Learning from '../Learning/Learning';
import Projects from '../Projects/Projects';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter basename="/traceylum">
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Learning" element={<Learning />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
