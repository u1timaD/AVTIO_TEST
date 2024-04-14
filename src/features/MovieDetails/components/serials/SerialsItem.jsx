import React from 'react';
import { Radio, Popover } from 'antd';
import SeriesPopover from './SeriesPopover.jsx';

const SerialsItem = ({ items }) => {
  return (
    <>
      <Radio.Group value="large">
        {items
          .sort((a, b) => a.number - b.number)
          .map((item) => (
            <Popover
              key={item.id}
              style={{
                maxHeight: '100px',
              }}
              content={<SeriesPopover key={item.id} episodes={item.episodes} />}
              title={item.name}
              trigger="click"
              placement="bottom"
            >
              <Radio.Button key={item.id}>{item.name}</Radio.Button>
            </Popover>
          ))}
      </Radio.Group>
    </>
  );
};

export default SerialsItem;
