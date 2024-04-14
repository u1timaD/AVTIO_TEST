import React from 'react';
import { Radio } from 'antd';

const SeriesButton = ({ item }) => {
  return (
    <Radio.Button key={item.id} value="large">
      {item.name}
    </Radio.Button>
  );
};

export default SeriesButton;
