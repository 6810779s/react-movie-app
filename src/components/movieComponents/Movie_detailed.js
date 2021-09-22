import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePromise, APIKey, language } from '../../lib/data';
import Loader from '../Spinner';
import axios from '../../../node_modules/axios/index';
import MovieDetailItems from './MovieDetailItems';

const Movie_detailed = () => {
  const params = useParams();
  const movie_id = params.movie_id;
  const apiAddress = [
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKey}&language=${language[0]}`,
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${APIKey}&language=${language[0]}`,
    `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${APIKey}&language=${language[0]}&page=1`,
  ];

  //youtube 재생
  /*
  https://www.youtube.com/embed/&{비디오 key}?autoplay=0
  */

  const [loading1, movieDetail_res, error1] = usePromise(() => {
    return axios.get(apiAddress[0]);
  });
  const [loading2, movieVideos_res, error2] = usePromise(() => {
    return axios.get(apiAddress[1]);
  });
  const [loading3, movieSimilar_res, error3] = usePromise(() => {
    return axios.get(apiAddress[2]);
  });

  if (loading1 || loading2 || loading3) {
    return <Loader />;
  }

  if (!movieDetail_res || !movieVideos_res || !movieSimilar_res) {
    return null;
  }

  if (error1 || error2 || error3) {
    return '에러 발생';
  }

  const genres_list = movieDetail_res.data.genres.map((genre) => (
    <span>{genre.name}&nbsp;</span>
  ));

  const videos_list = movieVideos_res.data.results.map((video, index) => (
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

  const similar_list = movieSimilar_res.data.results.map((similar) => (
    <li
      key={similar.id}
      onClick={() => {
        window.location.replace('/movie/' + similar.id);
      }}
      style={{ cursor: 'pointer' }}
    >
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
    <div>
      <MovieDetailItems
        key={movieDetail_res.data.id}
        poster={
          `https://image.tmdb.org/t/p/w500` + movieDetail_res.data.poster_path
        }
        title={movieDetail_res.data.title}
        genres_list={genres_list}
        vote_average={movieDetail_res.data.vote_average}
        release_date={movieDetail_res.data.release_date.slice(0, 4)}
        runtime={movieDetail_res.data.runtime}
        overview={movieDetail_res.data.overview}
        videos_list={videos_list}
        similar_list={similar_list}
      />
    </div>
  );
};

export default Movie_detailed;
