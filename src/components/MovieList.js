import React, { useState, useEffect } from 'react';
import Loader from './Spinner';
import MovieItems from './MovieItems';
import styles from '../style/MovieList.module.css';
import axios from 'axios';

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://yts-proxy.now.sh/list_movies.json'
        );
        // console.log(response.data.data.movies.id);
        setMovies(response.data.data.movies);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (!movies) {
    return null;
  }
  console.log(movies);
  return (
    <div className={styles.movieContainer}>
      {movies.map((movie) => (
        <MovieItems
          key={movie.id}
          title={movie.title}
          poster={movie.medium_cover_image}
          genres={movie.genres}
        />
      ))}
      <MovieItems />
    </div>
  );
};

export default MovieList;
