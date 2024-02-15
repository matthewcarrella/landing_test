import Carousel from 'react-bootstrap/Carousel';
// export const Events = (props) => {
//   return ( 
//     <div style={{ display: 'block', width: 700, padding: 30 }}> 
//       <h4>React-Bootstrap Carousel Component</h4> 
//       <Carousel> 
//         <Carousel.Item interval={1500}> 
//           <img 
//             className="d-block w-100"
// src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
//             alt="Image One"
//           /> 
//           <Carousel.Caption> 
//             <h3>Label for first slide</h3> 
//             <p>Sample Text for Image One</p> 
//           </Carousel.Caption> 
//         </Carousel.Item> 
//         <Carousel.Item interval={500}> 
//           <img 
//             className="d-block w-100"
// src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
//             alt="Image Two"
//           /> 
//           <Carousel.Caption> 
//             <h3>Label for second slide</h3> 
//             <p>Sample Text for Image Two</p> 
//           </Carousel.Caption> 
//         </Carousel.Item> 
//       </Carousel> 
//     </div> 
//   ); 
// }

export const Events = (props) => {
  return (
    <div style={{display: 'block', width: 700, padding: 30}}>
    <h4>Gallery</h4>
    <Carousel>
        { props.data ? props.data.map((d, i) => (
          <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={d.largerImage} alt=""/>
              <Carousel.Caption>
                  <h3>label for slide</h3>
              </Carousel.Caption>
          </Carousel.Item>
          )) : "..Loading"}
        </Carousel>
      </div>);
};