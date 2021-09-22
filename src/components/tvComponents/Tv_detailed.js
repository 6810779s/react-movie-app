import React from 'react';
import { useParams } from 'react-router-dom';
import { usePromise, APIKey, language } from '../../lib/data';
import Loader from '../Spinner';
import axios from '../../../node_modules/axios/index';
import TvDetailItems from './TvDetailItems';

const Tv_detailed = () => {
  const params = useParams();
  const tv_id = params.tv_id;
  const apiAddress = [
    `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${APIKey}&language=${language[0]}`,
    `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${APIKey}&language=${language[0]}`,
    `https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${APIKey}&language=${language[0]}&page=1`,
  ];

  const [loading1, tvDetail_res, error1] = usePromise(() => {
    return axios.get(apiAddress[0]);
  });
  const [loading2, tvCredit_res, error2] = usePromise(() => {
    return axios.get(apiAddress[1]);
  });
  const [loading3, tvSimilar_res, error3] = usePromise(() => {
    return axios.get(apiAddress[2]);
  });

  if (loading1 || loading2 || loading3) {
    return <Loader />;
  }

  if (!tvDetail_res || !tvCredit_res || !tvSimilar_res) {
    return null;
  }

  if (error1 || error2 || error3) {
    return '에러 발생';
  }

  const genres_list = tvDetail_res.data.genres.map((genre) => (
    <span>{genre.name}&nbsp;</span>
  ));
  console.log(tvCredit_res.data.crew);
  const creditCast_list = tvCredit_res.data.cast.map((credit, index) => (
    <div key={index}>
      {credit.profile_path !== null ? (
        <img
          width="100px"
          src={'https://image.tmdb.org/t/p/w500' + credit.profile_path}
        ></img>
      ) : (
        <div width="100px" height="150px" background="white"></div>
      )}
      <p>{credit.name}</p>
      <p>{credit.known_for_department}</p>
    </div>
  ));
  const creditCrew_list = tvCredit_res.data.crew.map((credit, index) => (
    <div key={index}>
      {credit.profile_path !== null ? (
        <img
          width="100px"
          src={'https://image.tmdb.org/t/p/w500' + credit.profile_path}
        ></img>
      ) : (
        <div style={{ width: '100px', height: '150px' }}>
          <p style={{ lineHeight: '150px' }}>no picture</p>
        </div>
      )}
      <p>{credit.name}</p>
      <p>{credit.known_for_department}</p>
    </div>
  ));

  const similar_list = tvSimilar_res.data.results.map((similar) => (
    <li
      key={similar.id}
      onClick={() => {
        window.location.replace('/tv/' + similar.id);
      }}
      style={{ cursor: 'pointer' }}
    >
      <img
        width="200px"
        height="300px"
        src={'https://image.tmdb.org/t/p/w500' + similar.poster_path}
      />
      <p>
        {similar.name.length < 15
          ? similar.name
          : similar.name.slice(0, 15) + '...'}
      </p>
    </li>
  ));

  return (
    <div>
      <TvDetailItems
        key={tvDetail_res.data.id}
        poster={
          `https://image.tmdb.org/t/p/w500` + tvDetail_res.data.poster_path
        }
        title={tvDetail_res.data.name}
        genres_list={genres_list}
        vote_average={tvDetail_res.data.vote_average}
        first_air_date={
          tvDetail_res.data.first_air_date === null
            ? ''
            : tvDetail_res.data.first_air_date.slice(0, 4)
        }
        number_of_seasons={tvDetail_res.data.number_of_seasons}
        number_of_episodes={tvDetail_res.data.number_of_episodes}
        overview={tvDetail_res.data.overview}
        creditCast_list={creditCast_list}
        creditCrew_list={creditCrew_list}
        similar_list={similar_list}
      />
    </div>
  );
};

export default Tv_detailed;
