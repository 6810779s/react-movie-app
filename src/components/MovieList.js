import React, { useState, useEffect } from 'react';
import Loader from './Spinner';
import MovieItems from './MovieItems';
import styles from '../style/MovieList.module.css';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({
    popular: '',
    top_rated: '',
    upcoming: '',
    now_playing: '',
  });
  const APIKey = '7db3edc572c4459c628c28ce8cec50fa';
  const language = ['ko-KR', 'pt-US'];
  const apiAdrres = [
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
      margin-bottom: 5px;
    }
  `;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res1 = await axios.get(apiAdrres[0]);
        const res2 = await axios.get(apiAdrres[1]);
        const res3 = await axios.get(apiAdrres[2]);
        const res4 = await axios.get(apiAdrres[3]);

        setMovies({
          popular: res1.data.results,
          top_rated: res2.data.results,
          upcoming: res3.data.results,
          now_playing: res4.data.results,
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
  if (
    !movies.popular ||
    !movies.top_rated ||
    !movies.upcoming ||
    !movies.now_playing
  ) {
    return null;
  }
  console.log(movies.popular);

  return (
    <div className={styles.movieContainer}>
      {/* popular */}
      <Wrap>
        <h2>인기</h2>
        <Slider {...settings}>
          {movies.popular.map((movie) => (
            <MovieItems
              key={movie.id}
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
          {movies.top_rated.map((movie) => (
            <MovieItems
              key={movie.id}
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
          {movies.upcoming.map((movie) => (
            <MovieItems
              key={movie.id}
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

      {/* now_playing */}
      <Wrap>
        <h2>현재 상영 중</h2>
        <Slider {...settings}>
          {movies.now_playing.map((movie) => (
            <MovieItems
              key={movie.id}
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
