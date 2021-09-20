import React from 'react';
import styles from '../style/MovieItems.module.css';
import { NavLink } from 'react-router-dom';

const MovieItems = ({ movie_id, title, poster, release_date }) => {
  return (
    <div className={styles.Container}>
      <NavLink exact to={`/movie/` + movie_id}>
        {poster && (
          <div className={styles.thumbnail}>
            <img
              src={poster}
              alt="poster"
              style={{ width: '200px', height: '300px' }}
            />
          </div>
        )}
      </NavLink>
      <div className={styles.contents}>
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
};

export default MovieItems;
