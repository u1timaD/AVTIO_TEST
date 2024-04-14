import React from 'react';
import { Card, Space, Collapse } from 'antd';

const ReviewItem = ({ item }) => {
  const { id, author, review } = item;

  const textSliceEnd = (text) => text.split(' ').slice(0, 50).join(' ');
  const textSliceStart = (text) => text.split(' ').slice(50).join(' ');
  const text = <p style={{}}>{textSliceStart(review)}</p>;
  const items = [
    {
      key: id,
      label: 'Показать всю рецензию',
      children: text,
    },
  ];

  return (
    <Space direction="vertical" size={16}>
      <Card
        title={author}
        style={{
          width: '100%',
        }}
      >
        <p>{textSliceEnd(review)}</p>
        <Collapse items={items} ghost defaultActiveKey={['1']} />
      </Card>
    </Space>
  );
};

export default ReviewItem;
