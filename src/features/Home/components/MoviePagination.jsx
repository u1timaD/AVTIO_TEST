import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from 'antd';
import { NUMBER_PAGE_DEFAULT } from '../constants/constants.js';

const MoviePagination = ({ total }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page'));

  const handlePageChange = (evt) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', evt);
    setSearchParams(newSearchParams.toString());
  };

  useEffect(() => {
    setPage(searchParams.get('page'));
  }, [searchParams]);

  return (
    <Pagination
      onChange={handlePageChange}
      current={page || NUMBER_PAGE_DEFAULT}
      defaultPageSize={1}
      total={total}
      showSizeChanger={false}
    />
  );
};
export default MoviePagination;
