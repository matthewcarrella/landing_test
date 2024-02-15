import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const Events = (props) => {
  return (
    <div>
    <h2>TEST</h2>
  <AwesomeSlider>
    { props.data ? props.data.map((d, i) => (
       <div data-src={d.largeImage} />)) : "...Loading"}
  </AwesomeSlider>
  </div>
);
};