import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const YearFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeYear = (evt) => {
    if (evt) {
      const year1 = evt[0]['$y'];
      const year2 = evt[1]['$y'];
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('year', `${year1}-${year2}`);
      setSearchParams(newSearchParams);
    } else {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('page', 1);
      newSearchParams.set('limit', 10);
      newSearchParams.delete('year');
      setSearchParams(newSearchParams.toString());
    }
  };

  return <RangePicker picker="year" onChange={handleChangeYear} allowClear />;
};

export default YearFilter;
