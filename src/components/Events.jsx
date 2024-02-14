import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export const Events = (props) => {
 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div class="slider-item">
        <h3>1</h3>
      </div>
      <div class="slider-item">
        <h3>2</h3>
      </div>
      <div class="slider-item">
        <h3>3</h3>
      </div>
    
    </Slider>
  );
};
