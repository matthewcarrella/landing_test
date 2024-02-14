import Slider from 'react-slick';

export const Events = (props) => {
 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider style="line-height:0;" {...settings}>
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
