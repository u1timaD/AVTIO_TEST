import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Slider } from 'antd';

const AgeRatingFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeComplete = (evt) => {
    const range1 = evt[0];
    const range2 = evt[1];
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('ageRating', `${range1}-${range2}`);
    setSearchParams(newSearchParams);
  };

  return (
    <div
      style={{
        width: '200px',
      }}
    >
      <Slider
        range
        step={6}
        min={0}
        max={18}
        defaultValue={[0, 18]}
        onChangeComplete={onChangeComplete}
      />
    </div>
  );
};

export default AgeRatingFilter;
