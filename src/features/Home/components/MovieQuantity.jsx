import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Select } from 'antd';
import { COUNT_MOVIE_DEFAULT, PAGES_VALUE } from '../constants/constants.js';

const MovieQuantity = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(searchParams.get('limit'));

  const handleLimitChange = (evt) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('limit', evt);
    setSearchParams(newSearchParams.toString());
  };

  useEffect(() => {
    setLimit(searchParams.get('limit'));
  }, [searchParams]);

  return (
    <Select
      value={limit || COUNT_MOVIE_DEFAULT}
      style={{
        width: 120,
      }}
      onChange={handleLimitChange}
      options={PAGES_VALUE}
    />
  );
};

export default MovieQuantity;
