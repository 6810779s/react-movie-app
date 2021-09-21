import React from 'react';
import { usePromise, APIKey, language } from '../../lib/data';

const TvList = () => {
  const apiAddress = [
    `https://api.themoviedb.org/3/tv/81356/recommendations?api_key=${APIKey}&language=${language[0]}&page=1`, //main_recommendation
    `https://api.themoviedb.org/3/tv/popular?api_key=${APIKey}&language=${language[0]}&page=1`, //popular
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIKey}&language=${language[0]}&page=1`, //top_rated
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKey}&language=${language[0]}&page=1`, //현재 상영중
  ];
  return <div></div>;
};

export default TvList;
