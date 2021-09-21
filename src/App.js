import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import MovieList from './components/movieComponents/MovieList';
import Movie_detailed from './components/movieComponents/Movie_detailed';
import TvList from './components/tvComponents/TvList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <ul className="category">
        <li>
          <NavLink exact to="/">
            <p className="nav_selected">Movie</p>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/tv">
            <p className="nav_selected">TV</p>
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movie/:movie_id" component={Movie_detailed} />
        <Route exact path="/tv" component={TvList} />
      </Switch>
    </div>
  );
};

export default App;
