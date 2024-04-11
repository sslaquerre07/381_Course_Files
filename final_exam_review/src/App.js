import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
