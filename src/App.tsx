import React from 'react';

import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
