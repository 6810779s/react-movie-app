import React from 'react';
import MovieList from './components/MovieList';
import MainImage from './components/MainImage';
import './App.css';

const App = () => {
  return (
    <div>
      <MainImage />
      <MovieList />
    </div>
  );
};

export default App;
