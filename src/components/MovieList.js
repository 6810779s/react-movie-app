import React, { useState, useEffect, useRef } from 'react';
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
  const [movies_popular, setMovies_popular] = useState(null);
  const APIKey = '7db3edc572c4459c628c28ce8cec50fa';
  const language = ['ko-KR', 'pt-US'];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const Wrap = styled.div`
    margin: 5% auto;
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
  `;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=${language[0]}&page=1`
        );
        setMovies_popular(response.data.results);
        // setMovies(response.data.data.movies);
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
  if (!movies_popular) {
    return null;
  }

  return (
    <div className={styles.movieContainer}>
      {/* popular */}
      <Wrap>
        <h2>현재 흥행작</h2>
        <Slider {...settings}>
          {movies_popular.map((movie) => (
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
