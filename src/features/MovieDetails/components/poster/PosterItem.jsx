import React from 'react';

const PosterItem = ({ item }) => {
  const { url, width, height, poster } = item;
  const sliderImgWrapper = {
    width: '200px',
    height: '200px',
  };

  const sliderImg = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  return (
    <div style={sliderImgWrapper} className="slider-img-wrapper">
      <img
        style={sliderImg}
        className="slider-img"
        src={url || poster.url}
        width={width}
        height={height}
        alt=""
      />
    </div>
  );
};

export default PosterItem;
