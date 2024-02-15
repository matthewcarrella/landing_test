import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Events = (props) => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};
  return (
  <>
    <div className="content">
      <h1 className="header">Car Gallery</h1>
      <div className="container">
        <Slider {...settings}>
          { props.data ? props.map((d, i) => (
            <div key={i}>
              <img src={d.src} alt={d.alt} className="img" />
              <h2 className="title">{d.title}</h2>
              <p className="description">{d.description}</p>
            </div>
          ))               : "Loading..."}
        </Slider>
      </div>
    </div>
  </>
);

};