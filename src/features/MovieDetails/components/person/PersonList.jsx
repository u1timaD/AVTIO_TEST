import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonItem from './PersonItem.jsx';
import DetailsPagination from '../DetailsPagination.jsx';
import { fetchPersonList } from '../../api/PersonApi.js';

const PersonList = ({ id }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [pageTotal, setPageTotal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const personListData = await fetchPersonList(page, id);
      setItems(personListData.docs);
      setPageTotal(personListData.pages);
    };

    fetchData();
  }, [page, id]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <div className="film-details__row">
      <div className="film-details__term">Актёры</div>
      <div className="film-details__cell">
        {!!items.length &&
          items.map((item) => (
            <PersonItem
              key={item.id}
              item={item}
              className="film-details__list"
            />
          ))}
        <DetailsPagination
          handleChangePage={handleChangePage}
          pageTotal={pageTotal}
        />
      </div>
    </div>
  );
};

export default PersonList;
