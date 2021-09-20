import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Spinner';
import axios from '../../node_modules/axios/index';
import styles from '../style/Movie_detailed.module.css';

const Movie_detailed = () => {
  const params = useParams();
  const movie_id = params.movie_id;

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({
    movie_detail: '',
    movie_videos: '',
    movie_similar: '',
  });
  const APIKey = '7db3edc572c4459c628c28ce8cec50fa';
  const language = ['ko-KR', 'pt-US'];
  const apiAddress = [
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&language=${language[0]}`,
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${APIKey}&language=${language[0]}`,
    `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${APIKey}&language=${language[0]}&page=1`,
  ];

  //youtube 재생
  /*
  https://www.youtube.com/embed/&{비디오 key}?autoplay=0
  */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const movieDetail_res = await axios.get(apiAddress[0]);
        const movieVideos_res = await axios.get(apiAddress[1]);
        const movieSimilar_res = await axios.get(apiAddress[2]);

        console.log(movieVideos_res.data.results);
        console.log(movieSimilar_res);

        setMovies({
          movie_detail: movieDetail_res.data,
          movie_videos: movieVideos_res.data.results,
          movie_similar: movieSimilar_res.data.results,
        });
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

  if (!movies.movie_detail || !movies.movie_videos || !movies.movie_similar) {
    return null;
  }

  const genres_list = movies.movie_detail.genres.map((genre) => (
    <span>{genre.name}&nbsp;</span>
  ));

  return (
    <div>
      <div className={styles.thumbnail}>
        <img
          src={
            'https://image.tmdb.org/t/p/w500' + movies.movie_detail.poster_path
          }
        />
      </div>
      <div className={styles.desc_container}>
        <ul>
          <li>{movies.movie_detail.title}</li>
          <li>
            {movies.movie_detail.vote_average} /{' '}
            {movies.movie_detail.release_date.slice(0, 4)} /{' '}
            {movies.movie_detail.runtime} / {genres_list}
          </li>
          <li>{movies.movie_detail.overview}</li>
          <li>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/az2sQoPocUQ?autoplay=0"
              frameBorder="0"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </li>
          <li>similar movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Movie_detailed;
