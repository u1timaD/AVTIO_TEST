import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { List, Skeleton } from 'antd';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

const SeriesPopover = ({ episodes }) => {
  const formattedDate = (airDate) =>
    !airDate
      ? '-'
      : format(new Date(airDate), 'd MMMM yyyy', { locale: ruLocale });

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        width: '500px',
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={episodes.length}
        hasMore={episodes.length < 10}
        loader={
          <Skeleton
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={episodes}
          renderItem={(item) => (
            <List.Item key={item.number}>
              <List.Item.Meta
                title={item.name}
                description={`Эпизод: ${item.number} (${item.enName})`}
              />
              <div>{formattedDate(item.airDate)}</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default SeriesPopover;
