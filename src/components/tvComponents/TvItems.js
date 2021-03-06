import React from 'react';
import styles from '../../style/lib/Items.module.css';
import { NavLink } from 'react-router-dom';

const TvItems = ({ tv_id, title, poster, first_air_date }) => {
  return (
    <div className={styles.Container}>
      <NavLink exact to={`/tv/` + tv_id}>
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
        <p>{first_air_date}</p>
      </div>
    </div>
  );
};

export default TvItems;
