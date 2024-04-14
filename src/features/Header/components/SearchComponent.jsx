// SearchComponent.js
import React, { useCallback, useEffect, useState } from 'react';
import { Input, Popover } from 'antd';
import SearchApi from '../api/SearchApi.js';
import debounce from 'lodash.debounce';
import SearchPopover from './SearchPopover.jsx';
import { useLocation } from 'react-router';

const SearchComponent = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [searchMovieData, setSearchMovieData] = useState([]);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    !location.search && setInputSearchValue('');
  }, [location.search]);

  const updateSearchValue = useCallback(
    debounce(async (inputSearchValue) => {
      const data = await SearchApi.fetchMovies(inputSearchValue);
      setSearchMovieData(data.docs);
    }, 1000),
    []
  );

  const handleClosePopover = () => {
    setPopoverVisible(false);
  };

  const handleChangeInput = (evt) => {
    const value = evt.target.value;
    setInputSearchValue(value);
    if (value.trim() !== '') {
      setPopoverVisible(true);
    } else {
      setPopoverVisible(false);
    }
    updateSearchValue(value);
  };

  const onSearch = (value, _e, info) =>
    info?.source === 'clear' && setInputSearchValue('');

  const content = (
    <SearchPopover
      data={searchMovieData}
      handleClosePopover={handleClosePopover}
    />
  );

  return (
    <>
      <Popover content={content} open={popoverVisible} trigger="focus">
        <Input
          placeholder="Что посмотрим?"
          allowClear
          value={inputSearchValue}
          onChange={handleChangeInput}
          style={{
            width: 200,
          }}
        />
      </Popover>
    </>
  );
};

export default SearchComponent;
