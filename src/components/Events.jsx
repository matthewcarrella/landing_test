import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';

export const Events = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={false}>
       { props.data ? props.data.map((slide, i) => (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.largeImage}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.title}</h3>

        </Carousel.Caption>
      </Carousel.Item>
        )) : "Loading..."}
      
    </Carousel>
  );
};