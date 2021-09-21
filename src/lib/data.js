import React, { useState, useEffect } from 'react';

function usePromise(promiseCreator) {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const movies = await promiseCreator();
        setMovies(movies);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return [loading, movies, error];
}

const APIKey = '7db3edc572c4459c628c28ce8cec50fa';
const language = ['ko-KR', 'pt-US'];

export { usePromise, APIKey, language };
