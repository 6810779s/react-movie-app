import React from 'react';
import Loader from '../Spinner';
import { usePromise, APIKey, language } from '../../lib/data';
import { Wrap, Main_Wrap, settings, settings_main } from '../../lib/style_data';
import TvmainItems from './TvmainItems';
import TvItems from './TvItems';
import Slider from 'react-slick';
import axios from 'axios';
import styles from '../../style/tvStyles/tvContainer.module.css';

const TvList = () => {
  const apiAddress = [
    `https://api.themoviedb.org/3/tv/81356/recommendations?api_key=${APIKey}&language=${language[0]}&page=1`, //main_recommendation
    `https://api.themoviedb.org/3/tv/popular?api_key=${APIKey}&language=${language[0]}&page=1`, //popular
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKey}&language=${language[0]}&page=1`, //top_rated
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKey}&language=${language[0]}&page=1`, //현재 상영중
  ];

  const [loading1, main, error1] = usePromise(() => {
    return axios.get(apiAddress[0]);
  });
  const [loading2, popular, error2] = usePromise(() => {
    return axios.get(apiAddress[1]);
  });
  const [loading3, top_rated, error3] = usePromise(() => {
    return axios.get(apiAddress[2]);
  });
  const [loading4, on_the_air, error4] = usePromise(() => {
    return axios.get(apiAddress[3]);
  });

  if (loading1 || loading2 || loading3 || loading4) {
    return <Loader />;
  }

  if (!main || !popular || !top_rated || !on_the_air) {
    return null;
  }

  if (error1 || error2 || error3 || error4) {
    return '에러 발생';
  }

  console.log(popular.data.results);
  console.log(top_rated.data.results);
  console.log(on_the_air.data.results);

  return (
    <div className={styles.tvContainer}>
      {/* Main */}
      <Main_Wrap>
        <Slider {...settings_main}>
          {main.data.results.slice(0, 5).map((tv) => (
            <TvmainItems
              key={tv.id}
              tv_id={tv.id}
              title={tv.title}
              poster={'https://image.tmdb.org/t/p/w500' + tv.poster_path}
              first_air_date={tv.first_air_date.slice(0, 4)}
              overview={
                tv.overview.length < 100
                  ? tv.overview
                  : tv.overview.slice(0, 100) + '...'
              }
            />
          ))}
        </Slider>
      </Main_Wrap>
      {/* popular */}
      <Wrap>
        <h2>인기</h2>
        <Slider {...settings}>
          {popular.data.results.map((tv) => (
            <TvItems
              key={tv.id}
              tv_id={tv.id}
              // title={
              //   tv.name.length < 12 ? tv.name : tv.name.slice(0, 12) + '...'
              // }
              poster={'https://image.tmdb.org/t/p/w500' + tv.poster_path}
              first_air_date={tv.first_air_date.slice(0, 4)}
            />
          ))}
        </Slider>
      </Wrap>

      {/* popular */}
      <Wrap>
        <h2>평점 높은 순</h2>
        <Slider {...settings}>
          {top_rated.data.results.map((tv) => (
            <TvItems
              key={tv.id}
              tv_id={tv.id}
              title={
                tv.name.length < 12 ? tv.name : tv.name.slice(0, 12) + '...'
              }
              poster={'https://image.tmdb.org/t/p/w500' + tv.poster_path}
              first_air_date={tv.first_air_date.slice(0, 4)}
            />
          ))}
        </Slider>
      </Wrap>

      {/* popular */}
      <Wrap>
        <h2>현재 상영작</h2>
        <Slider {...settings}>
          {on_the_air.data.results.map((tv) => (
            <TvItems
              key={tv.id}
              tv_id={tv.id}
              title={
                tv.name.length < 12 ? tv.name : tv.name.slice(0, 12) + '...'
              }
              poster={'https://image.tmdb.org/t/p/w500' + tv.poster_path}
              first_air_date={tv.first_air_date.slice(0, 4)}
            />
          ))}
        </Slider>
      </Wrap>
    </div>
  );
};

export default TvList;
