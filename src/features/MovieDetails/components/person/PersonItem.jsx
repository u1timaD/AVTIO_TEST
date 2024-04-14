import React from 'react';

const PersonItem = ({ item, className }) => {
  const { name } = item;

  const displayName = name || 'Нет данных об актере';

  return (
    <>
      <span className={className}>{displayName}</span>
    </>
  );
};

export default PersonItem;
