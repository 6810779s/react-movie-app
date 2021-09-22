import React from 'react';
import styles from '../../style/movieStyles/MoviemainItems.module.css';
import { NavLink } from 'react-router-dom';

const TvmainItems = ({ tv_id, title, poster, first_air_date, overview }) => {
  return (
    <div className={styles.Container}>
      <NavLink exact to={`/tv/` + tv_id}>
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
      <NavLink exact to={'/tv/' + tv_id}>
        <div className={styles.description}>
          <h1>{title}</h1>
          <p className={styles.release_date}>{first_air_date}</p>
          <p className={styles.summary}>줄거리</p>
          <p className={styles.overview}>{overview}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default TvmainItems;
