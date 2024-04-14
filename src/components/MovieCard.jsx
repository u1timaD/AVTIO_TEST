import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Typography } from 'antd';
import { checkValue } from '../utils/utils.js';

const MovieCard = ({ item }) => {
  const { id, poster, ageRating, name, year, alternativeName } = item;

  const checkAgeRating = checkValue(ageRating, 'Без рейтинга');
  const checkAlternativeName = checkValue(alternativeName, '');
  const checkName = checkValue(name, 'Без названия');
  const checkYear = checkValue(year, 'Без года выпуска');

  return (
    <div style={{ padding: 10 }}>
      <Card
        bordered={false}
        style={{
          cursor: 'pointer',
          padding: 0,
          borderRadius: 15,
        }}
        styles={{
          body: {
            padding: 10,
          },
        }}
      >
        <Link to={`/movie/${id}`}>
          <div className="movie-wrapper">
            <div className="movie-img-wrapper">
              {!poster || !poster.url ? (
                <img src="/assets/NoPoster.jpg" alt="Нет постера" />
              ) : (
                <img src={poster.url} width={258} height={387} alt={name} />
              )}
            </div>

            <div className="movie-wrapper-info">
              <Typography className="movie-name">{`${checkName} (${checkYear})`}</Typography>
              <Typography className="movie-year">
                {checkAlternativeName}
              </Typography>
              <Typography className="movie-year">{`${checkAgeRating}+`}</Typography>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default MovieCard;
