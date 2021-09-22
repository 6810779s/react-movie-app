import React from 'react';
import styles from '../../style/lib/detail.module.css';
import { AiFillStar } from 'react-icons/ai';

const TvDetailItems = ({
  poster,
  title,
  genres_list,
  vote_average,
  first_air_date,
  number_of_seasons,
  number_of_episodes,
  overview,
  creditCast_list,
  creditCrew_list,
  similar_list,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img width="500" src={'https://image.tmdb.org/t/p/w500' + poster} />
      </div>
      <div className={styles.desc_container}>
        <h1>{title}</h1>
        <p className={styles.genres}>{genres_list}</p>
        <p className={styles.detail}>
          <AiFillStar style={{ color: 'yellow' }} />
          {vote_average}&nbsp;&nbsp;
          {first_air_date}&nbsp;&nbsp;
          {number_of_episodes}부작 시즌 {number_of_seasons}개
        </p>
        <p className={styles.overview}>{overview}</p>
        <p className={styles.preview}>인물 정보</p>
        <p>출연진</p>
        <div className={styles.creditCast}>{creditCast_list}</div>
        <p>제작진</p>
        <div className={styles.creditCrew}>
          {creditCrew_list.length !== 0 ? creditCrew_list : ''}
        </div>
        <p className={styles.similar}>Similar</p>
        <div className={styles.similarList}>
          <ul style={{ width: similar_list.length * 230 }}>{similar_list}</ul>
        </div>
      </div>
    </div>
  );
};

export default TvDetailItems;
