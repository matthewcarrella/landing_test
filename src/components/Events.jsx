import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],

    nextArrow: (
     <div>&gt;</div>
    
  ),
  prevArrow: (
    <div>&lt;</div>
  ),
};


export const Events = (props) =>  {

    const [open, setOpen] = React.useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

     function afterOpenModal() {
    // references are now sync'd and can be accessed.
    return;
  }

 
 
  return (

  <>

    <div className="sl-content">
      <h1 className="sl-header">Products</h1>
      <div className="sl-container">

        <Slider {...settings}>
          {props.data ? props.data.map((d, i) => (
   <div key={i}>
              <img src={d.largeImage} alt="" className="sl-img" />
              <h2 className="sl-title">{d.title}</h2>


            </div>
  )) : <div>"...Loading"</div>}
          

        </Slider>
        
      </div>
    </div>
   <div>
    <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
        <button onClick={handleClose}>close</button>
        <div>I am a modal</div>
       
      </Modal>
        </div>
  </>

  );
};