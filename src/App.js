import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import MovieList from './components/movieComponents/MovieList';
import Movie_detailed from './components/movieComponents/Movie_detailed';
import TvList from './components/tvComponents/TvList';
import Tv_detailed from './components/tvComponents/Tv_detailed';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <ul className="category">
        <li>
          <NavLink exact to="/react-movie-app">
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
        <Route exact path="/react-movie-app" component={MovieList} />
        <Route
          exact
          path="/movie/:movie_id"
          render={(props) => (
            <Movie_detailed key={props.match.params.movie_id} {...props} />
          )}
        />
        <Route exact path="/tv" component={TvList} />
        <Route
          exact
          path="/tv/:tv_id"
          component={Tv_detailed}
          render={(props) => (
            <Tv_detailed key={props.march.params.tv_id} {...props} />
          )}
        />
        <Route path="/">
          <h1 className="notFound">Not found :(</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
