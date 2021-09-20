import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Loader from './Spinner';
import axios from '../../node_modules/axios/index';
import styles from '../style/Movie_detailed.module.css';
import MovieDetailItems from './MovieDetailItems';

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

  const videos_list = movies.movie_videos.map((video, index) => (
    <div key={index}>
      <iframe
        width="420"
        height="300"
        src={'https://www.youtube.com/embed/' + video.key + '?autoplay=0'}
        frameBorder="0"
        allowFullScreen="allowFullScreen"
      ></iframe>
    </div>
  ));

  const similar_list = movies.movie_similar.map((similar) => (
    <li key={similar.id}>
      <img
        width="200px"
        height="300px"
        src={'https://image.tmdb.org/t/p/w500' + similar.poster_path}
      />
      <p>
        {similar.title.length < 15
          ? similar.title
          : similar.title.slice(0, 15) + '...'}
      </p>
    </li>
  ));

  return (
    <div className={styles.container}>
      {movies.movie_detail.map((detail) => {
        <MovieDetailItems
          key={detail.id}
          movie_id={detail.id}
          poster={`https://image.tmdb.org/t/p/w500` + detail.poster_path}
          title={detail.title}
          genres_list={genres_list}
          vote_average={movies.movie_detail.vote_average}
          release_date={movies.movie_detail.release_date.slice(0, 4)}
          runtime={movies.movie_detail.runtime}
          overview={movies.movie_detail.overview}
          videos_list={videos_list}
          similar_list={similar_list}
        />;
      })}
      {/* <div className={styles.thumbnail}>
        <img
          width="500"
          src={
            'https://image.tmdb.org/t/p/w500' + movies.movie_detail.poster_path
          }
        />
      </div>
      <div className={styles.desc_container}>
        <h1>{movies.movie_detail.title}</h1>
        <p className={styles.genres}>{genres_list}</p>
        <p className={styles.detail}>
          <AiFillStar style={{ color: 'yellow' }} />
          {movies.movie_detail.vote_average}&nbsp;&nbsp;
          {movies.movie_detail.release_date.slice(0, 4)}&nbsp;&nbsp;
          {movies.movie_detail.runtime}min
        </p>
        <p className={styles.overview}>{movies.movie_detail.overview}</p>
        <p className={styles.preview}>Preview</p>
        <div className={styles.videoList}>
          {videos_list.length !== 0 ? (
            videos_list
          ) : (
            <p>Sorry, there's no trailer</p>
          )}
        </div>
        <p className={styles.similar}>Similar</p>
        <div className={styles.similarList}>
          <ul style={{ width: similar_list.length * 230 }}>{similar_list}</ul>
        </div>
      </div> */}
    </div>
  );
};

export default Movie_detailed;
