import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../style/Movie_detailed.module.css';

const Movie_detailed = () => {
  const params = useParams();
  const movie_id = params.movie_id;
  return (
    <div>
      <div className={styles.thumbnail}></div>
      <div className={styles.desc_container}>
        <ul>
          <li>title</li>
          <li>starts / year / running-time / gern</li>
          <li>description</li>
          <li>youtube player</li>
          <li>similar movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Movie_detailed;
