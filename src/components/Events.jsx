import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();


export const Events = (props) => {
  const items = props.data ? props.data.map((d, i) => 
  <img src={d.largeImage} onDragStart={handleDragStart} role="presentation" />) : [];


  return (
    <AliceCarousel mouseTracking items={items} />
  );
}