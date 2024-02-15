import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


export const Events = (props) => {
  const items = props.data ? props.data.map((d, i) => 
  <img src={d.largeImage} onDragStart={handleDragStart} role="presentation" />) : [];


  return (
    <AliceCarousel mouseTracking items={items} responsive={responsive}/>
  );
}