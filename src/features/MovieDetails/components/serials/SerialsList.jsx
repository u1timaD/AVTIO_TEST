import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SerialsItem from './SerialsItem.jsx';
import DetailsPagination from '../DetailsPagination.jsx';

const SerialsList = ({ id }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [pageTotal, setPageTotal] = useState();

  useEffect(() => {
    const getSeries = async () => {
      try {
        const { data } = await axios.get(
          `https://api.kinopoisk.dev/v1.4/season?page=${page}&limit=10&movieId=${id}`,
          {
            headers: {
              'X-API-KEY': process.env.TOKEN,
            },
          }
        );
        setItems(data.docs);
        setPageTotal(data.pages);
      } catch (error) {
        console.error(`${error} - ошибка какая-то`);
      }
    };
    getSeries();
  }, [page, id]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <div className="film-details__row">
      <div className="film-details__term">Сезоны</div>
      <div className="film-details__cell">
        {!!items.length && <SerialsItem items={items} />}

        {pageTotal > 1 && (
          <DetailsPagination
            handleChangePage={handleChangePage}
            pageTotal={pageTotal}
          />
        )}
      </div>
    </div>
  );
};

export default SerialsList;
