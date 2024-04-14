import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Flex } from 'antd';
import './MovieDetails.css';
import MovieCard from '../../../components/MovieCard.jsx';
import ReviewList from '../components/review/ReviewList.jsx';
import SeriesList from '../components/serials/SerialsList.jsx';
import Loading from '../../../components/Loading.jsx';
import PersonList from '../components/person/PersonList.jsx';
import PosterItem from '../components/poster/PosterItem.jsx';
import DetailsSlider from '../components/DetailsSlider.jsx';

const MovieDetails = () => {
  // const token = process.env.TOKEN;
  const [MovieScreenData, setMovieScreenData] = useState();
  const [posterData, setPosterData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const [movieResponse, postersResponse] = await Promise.all([
          axios.get(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
            headers: {
              'X-API-KEY': process.env.TOKEN,
            },
          }),
          axios.get(`https://api.kinopoisk.dev/v1.4/image?movieId=${id}`, {
            headers: {
              'X-API-KEY': process.env.TOKEN,
            },
          }),
        ]);

        const movieData = movieResponse.data;
        const postersData = postersResponse.data;

        setMovieScreenData(movieData);
        setPosterData(postersData);
      } catch (error) {
        console.error(`${error} - ошибка какая-то`);
        navigate('/');
      }
    }

    fetchData();
  }, [id, navigate]);

  if (!MovieScreenData) {
    return <Loading />;
  }

  const {
    name,
    year,
    persons,
    description,
    rating,
    type,
    alternativeName,
    ageRating,
    poster,
    genres,
    countries,
    similarMovies,
  } = MovieScreenData;

  const checkAgeRating =
    ageRating !== null && ageRating !== undefined ? `${ageRating}+` : '';
  const checkRating = rating.kp !== 0 ? rating.kp.toFixed(1) : '-';

  return (
    <>
      <div className="film-details__info-wrap">
        <div className="film-details__poster">
          <img
            className="film-details__poster-img"
            src={poster?.url}
            alt={`${name} $(${year})`}
          />
        </div>

        <div className="film-details__info">
          <div className="film-details__info-head">
            <div className="film-details__title-wrap">
              <h3 className="film-details__title">{`${name} (${year})`}</h3>
              <p className="film-details__title-original">{`${alternativeName} ${checkAgeRating}`}</p>
            </div>

            <div className="film-details__rating">
              <p className="film-details__total-rating">{checkRating}</p>
            </div>
          </div>
          <p className="film-details__film-description">{description}</p>
          <div className="film-details__table">
            <PersonList id={id} />
            <ReviewList id={id} />
            {type === 'tv-series' && <SeriesList id={id} />}
          </div>

          {posterData?.docs && (
            <DetailsSlider
              items={posterData?.docs}
              SliderItemComponent={PosterItem}
            />
          )}
          {similarMovies && (
            <DetailsSlider
              items={similarMovies}
              SliderItemComponent={MovieCard}
            />
          )}

          <Button onClick={handleBack} style={{ marginTop: '100px' }}>
            Назад
          </Button>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
