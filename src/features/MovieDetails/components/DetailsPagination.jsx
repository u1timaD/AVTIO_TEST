import React from 'react';
import { Pagination } from 'antd';

const DetailsPagination = ({ handleChangePage, pageTotal }) => {
  const handleChange = (e) => {
    handleChangePage(e);
  };

  return (
    <Pagination
      onChange={handleChange}
      defaultCurrent={1}
      defaultPageSize={1}
      total={pageTotal}
      style={{}}
      showSizeChanger={false}
    />
  );
};

export default DetailsPagination;
