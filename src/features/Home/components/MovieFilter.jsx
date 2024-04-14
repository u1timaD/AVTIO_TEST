import React, { useEffect, useState } from 'react';
import CountryFilter from './CountryFilter.jsx';
import YearFilter from './YearFilter.jsx';
import AgeRatingFilter from './AgeRatingFilter.jsx';
import { fetchCountries } from '../api/MovieFilterApi.js';

const MovieFilter = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    };

    fetchData();
  }, []);

  return (
    <>
      <CountryFilter select={countries} />
      <YearFilter />
      <AgeRatingFilter />
    </>
  );
};

export default MovieFilter;
