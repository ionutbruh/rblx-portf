import React from 'react';
import Home from "src/components/Home";
import Examples from "src/components/Examples";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Examples />} />
      </Routes>
    </Router>
  );
}

export default App;
