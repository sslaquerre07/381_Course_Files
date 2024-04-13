import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Products from './Products.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
