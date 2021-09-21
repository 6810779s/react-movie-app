import React, { useState, useEffect } from 'react';

export default function usePromise(promiseCreator) {
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
