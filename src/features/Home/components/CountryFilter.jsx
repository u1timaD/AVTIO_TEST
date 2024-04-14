import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Select } from 'antd';

const CountryFilter = ({ select }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleChangeSearch = (evt) => {
    if (evt) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('page', 1);
      newSearchParams.set('limit', 10);
      newSearchParams.set('countries.name', evt);
      setSearchParams(newSearchParams.toString());
    }
  };

  const handleClearSearch = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', 1);
    newSearchParams.set('limit', 10);
    newSearchParams.delete('countries.name');
    setSearchParams(newSearchParams.toString());
  };

  const defaultValue = searchParams.get('countries.name') || '';

  const data = select?.map((item) => {
    return {
      value: item.name,
      label: item.name,
    };
  });

  return (
    <Select
      style={{
        width: 250,
      }}
      placeholder={'Выберите страну'}
      onChange={handleChangeSearch}
      options={data}
      allowClear
      onClear={handleClearSearch}
      defaultValue={defaultValue}
    />
  );
};

export default CountryFilter;
