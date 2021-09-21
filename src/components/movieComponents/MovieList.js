import React, { useState, useEffect } from 'react';
import Loader from '../Spinner';
import MovieItems from './MovieItems';
import MoviemainItems from './MoviemainItems';
import styles from '../../style/MovieList.module.css';
import { usePromise, APIKey, language } from '../../lib/data';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieList = () => {
  const apiAddress = [
    `https://api.themoviedb.org/3/movie/848278/recommendations?api_key=${APIKey}&language=${language[0]}&page=1`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=${language[0]}&page=1`,
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=${language[0]}&page=1`,
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=${language[0]}&page=1`,
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=${language[0]}&page=1`,
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const settings_main = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const Wrap = styled.div`
    margin: 3% auto;
    width: 100%;
    .slick-prev:before {
      color: gray; // 버튼 색은 검은색으로
      font-size: 50px;
    }
    .slick-prev {
      z-index: 9999;
      left: -55px;
    }
    .slick-next:before {
      color: gray; // 버튼 색은 검은색으로
      font-size: 50px;
    }
    .slick-next {
      z-index: 9999;
      right: -10px;
    }
    h2 {
      color: white;
      margin-bottom: 10px;
    }
  `;

  const Main_Wrap = styled.div`
    margin: 0 auto;
    width: 1300px;
    padding-top: 30px;
    h2 {
      margin-bottom: 5px;
    }
    .slick-list {
      width: 1300px;
      margin-left: 0;
    }
    .slick-dots {
    }
    .slick-dots li.slick-active button:before {
      color: white;
    }
    .slick-dots button:before {
      color: white;
    }
  `;

  const [loading1, main, error1] = usePromise(() => {
    return axios.get(apiAddress[0]);
  });
  const [loading2, popular, error2] = usePromise(() => {
    return axios.get(apiAddress[1]);
  });
  const [loading3, top_rated, error3] = usePromise(() => {
    return axios.get(apiAddress[2]);
  });
  const [loading4, upcoming, error4] = usePromise(() => {
    return axios.get(apiAddress[3]);
  });

  if (loading1 || loading2 || loading3 || loading4) {
    return <Loader />;
  }

  if (!main || !popular || !top_rated || !upcoming) {
    return null;
  }

  if (error1 || error2 || error3 || error4) {
    return '에러 발생';
  }

  return (
    <div className={styles.movieContainer}>
      {/* Main */}
      <Main_Wrap>
        <Slider {...settings_main}>
          {main.data.results.slice(0, 5).map((movie) => (
            <MoviemainItems
              key={movie.id}
              movie_id={movie.id}
              title={movie.title}
              poster={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              release_date={movie.release_date.slice(0, 4)}
              overview={
                movie.overview.length < 100
                  ? movie.overview
                  : movie.overview.slice(0, 100) + '...'
              }
            />
          ))}
        </Slider>
      </Main_Wrap>
      {/* popular */}
      <Wrap>
        <h2>인기</h2>
        <Slider {...settings}>
          {popular.data.results.map((movie) => (
            <MovieItems
              key={movie.id}
              movie_id={movie.id}
              title={
                movie.title.length < 12
                  ? movie.title
                  : movie.title.slice(0, 12) + '...'
              }
              poster={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              release_date={movie.release_date.slice(0, 4)}
            />
          ))}
        </Slider>
      </Wrap>
      {/* top_rated */}
      <Wrap>
        <h2>평점 높은 순</h2>
        <Slider {...settings}>
          {top_rated.data.results.map((movie) => (
            <MovieItems
              key={movie.id}
              movie_id={movie.id}
              title={
                movie.title.length < 12
                  ? movie.title
                  : movie.title.slice(0, 12) + '...'
              }
              poster={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              release_date={movie.release_date.slice(0, 4)}
            />
          ))}
        </Slider>
      </Wrap>
      {/* upcoming */}
      <Wrap>
        <h2>개봉 예정</h2>
        <Slider {...settings}>
          {upcoming.data.results.map((movie) => (
            <MovieItems
              key={movie.id}
              movie_id={movie.id}
              title={
                movie.title.length < 12
                  ? movie.title
                  : movie.title.slice(0, 12) + '...'
              }
              poster={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              release_date={movie.release_date.slice(0, 4)}
            />
          ))}
        </Slider>
      </Wrap>
    </div>
  );
};

export default MovieList;