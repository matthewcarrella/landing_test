import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export const Events = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <h2 class="slider-h2">Upcoming Events</h2>
      <Slider {...settings}>
        <div>
          <h3 class="slider-h3">SLIDE 1</h3>
        </div>
        <div>
          <h3 class="slider-h3">SLIDE 2</h3>
        </div>
        <div>
          <h3 class="slider-h3">SLIDE 3</h3>
        </div>
        <div>
          <h3 class="slider-h3">SLIDE 4</h3>
        </div>
        <div>
          <h3 class="slider-h3">SLIDE 5</h3>
        </div>
        <div>
          <h3 class="slider-h3">SLIDE 6</h3>
        </div>
      </Slider>
    </div>
  );
};
