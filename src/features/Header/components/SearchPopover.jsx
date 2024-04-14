import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { List } from 'antd';

const SearchPopover = ({ data, handleClosePopover }) => {
  const ref = useRef();
  const navigate = useNavigate();
  const handleClickCard = (id) => {
    navigate(`/movie/${id}`);
    handleClosePopover();
  };

  useEffect(() => {
    function handleClickOutside(evt) {
      if (ref.current && !ref.current.contains(evt.target)) {
        handleClosePopover();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClosePopover]);

  return (
    <div ref={ref}>
      <List
        itemLayout="vertical"
        size="large"
        style={{}}
        pagination={{
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            onClick={() => handleClickCard(item.id)}
            style={{
              cursor: 'pointer',
              maxWidth: '350px',
            }}
            extra={
              !item.poster || !item.poster.url ? (
                <img width={100} src="/images/NoPoster.jpg" alt="Нет постера" />
              ) : (
                <img width={100} src={item.poster.url} alt={item.name} />
              )
            }
          >
            <List.Item.Meta title={item.name} description={item.type} />
            {''}
          </List.Item>
        )}
      />
    </div>
  );
};
export default SearchPopover;
