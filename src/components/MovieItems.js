import React from 'react';
import styles from '../style/MovieItems.module.css';

const MovieItems = ({ title, poster, genres }) => {
  // const { title, url, year, summary, rating, genres } = movie;
  // console.log('movie', movie);
  return (
    <div className={styles.itemContainer}>
      {title}
      <img src={poster} alt="poster" />
      {genres}
    </div>
  );
};

export default MovieItems;
