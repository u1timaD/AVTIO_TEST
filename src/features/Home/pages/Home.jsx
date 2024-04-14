import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Flex } from 'antd';

import { fetchMovies } from '../movieSlice.js';

import MovieCard from '../../../components/MovieCard.jsx';
import MoviePagination from '../components/MoviePagination.jsx';
import MovieQuantity from '../components/MovieQuantity.jsx';
import Loading from '../../../components/Loading.jsx';
import Empty from '../../../components/Empty.jsx';
import MovieFilter from '../components/MovieFilter.jsx';
import NotFound from '../../../components/NotFound.jsx';

const Home = () => {
  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    movieList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'repeat(4, 1fr)',
      gridColumnGap: '10px',
      gridRowGap: '10px',
    },
  };

  const token = process.env.TOKEN;

  const dispatch = useDispatch();
  const location = useLocation();

  const [searchParams] = useSearchParams();

  const movieData = useSelector((state) => state.movie.items.docs);
  const movieTotalPages = useSelector((state) => state.movie.items.pages);
  const statusFetch = useSelector((state) => state.movie.status);

  const urlParamsData = `?${searchParams.toString()}`;

  useEffect(() => {
    if (!location.search) {
      const getMovie = async () => {
        dispatch(
          fetchMovies({
            token,
          })
        );
      };
      getMovie();
    }
  }, [location.search]);

  useEffect(() => {
    if (location.search) {
      const getMovie = async () => {
        dispatch(
          fetchMovies({
            token,
            urlParamsData,
          })
        );
      };
      getMovie();
    }
  }, [location.search]);

  return (
    <main style={styles.main}>
      <Flex style={{ width: '100%' }} gap="middle" justify={'end'}>
        <MovieQuantity />
        <MovieFilter />
      </Flex>
      <Flex style={{ padding: '10px 0' }}>
        <MoviePagination total={movieTotalPages} />
      </Flex>
      <section>
        <div className="card-container">
          <ul style={styles.movieList}>
            {statusFetch === 'error' ? (
              <NotFound />
            ) : statusFetch === 'loading' ? (
              <Loading />
            ) : movieData.length === 0 ? (
              <Empty />
            ) : (
              movieData.map((item) => <MovieCard key={item.id} item={item} />)
            )}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
