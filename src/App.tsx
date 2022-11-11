import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Fav from './pages/Fav';
import Home from './pages/Home';
import JsonPh from './pages/JsonPh';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fav' element={<Fav />} />
        <Route path='/jsonph' element={<JsonPh />} />
      </Routes>
    </>
  );
};

export default App;