import React from 'react';
import styles from '../../style/MoviemainItems.module.css';
import { NavLink } from 'react-router-dom';

const MoviemainItems = ({
  movie_id,
  title,
  poster,
  release_date,
  overview,
}) => {
  return (
    <div className={styles.Container}>
      <NavLink exact to={'/movie/' + movie_id}>
        {poster && (
          <div className={styles.thumbnail}>
            <img
              src={poster}
              alt="poster"
              style={{ width: '500px', height: '500px' }}
            />
          </div>
        )}
      </NavLink>
      <NavLink exact to={'/movie/' + movie_id}>
        <div className={styles.description}>
          <h1>{title}</h1>
          <p className={styles.release_date}>{release_date}</p>
          <p className={styles.summary}>줄거리</p>
          <p className={styles.overview}>{overview}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default MoviemainItems;
