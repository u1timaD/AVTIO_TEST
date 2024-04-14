import React from 'react';
import Slider from 'react-slick';
import NotFound from '../../../components/NotFound.jsx';

const DetailsSlider = ({ items, SliderItemComponent }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  if (!items || items.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item) => (
          <SliderItemComponent key={item.id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default DetailsSlider;
