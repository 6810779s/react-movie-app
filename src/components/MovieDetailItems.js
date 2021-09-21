import React from 'react';
import styles from '../style/Movie_detailed.module.css';

const MovieDetailItems = ({
  movie_id,
  poster,
  title,
  genres_list,
  vote_average,
  release_date,
  runtime,
  overview,
  videos_list,
  similar_list,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img width="500" src={'https://image.tmdb.org/t/p/w500' + poster} />
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
      </div>
    </div>
  );
};

export default MovieDetailItems;
