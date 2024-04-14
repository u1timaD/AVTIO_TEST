import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './features/Home/pages/Home.jsx'
import MainLayout from './layouts/MainLayout.jsx';
import MovieDetails from './features/MovieDetails/pages/MovieDetails.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
