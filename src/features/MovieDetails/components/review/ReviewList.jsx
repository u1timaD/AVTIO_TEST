import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem.jsx';
import DetailsPagination from '../DetailsPagination.jsx';
import getReviews from '../../api/ReviewApi.js';

const ReviewList = ({ id }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [pageTotal, setPageTotal] = useState();
  const token = process.env.TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews(id, page);
        setItems(data.docs);
        setPageTotal(data.pages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page, id]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <div className="film-details__row">
      <div className="film-details__term">Отзывы</div>
      <div className="film-details__cell">
        {!!items.length &&
          items.map((item) => <ReviewItem key={item.id} item={item} />)}
        <DetailsPagination
          handleChangePage={handleChangePage}
          pageTotal={pageTotal}
        />
      </div>
    </div>
  );
};

export default ReviewList;
