import React from "react";
import Slider from "react-slick";
import { Modal } from "./Modal";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

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

const GalleryImages = [
    {
      "title": "Project Title",
      "largeImage": "img/portfolio/IMG_2166_Original.jpg",
      "smallImage": "img/portfolio/IMG_2166_Original.jpg"
    },
    {
      "title": "Project Title",
      "largeImage": "img/portfolio/IMG_0039_Original.jpg",
      "smallImage": "img/portfolio/IMG_0039_Original.jpg"
    },
    {
      "title": "Project Title",
      "largeImage": "img/portfolio/20191109_173856.jpg",
      "smallImage": "img/portfolio/20191109_173856.jpg"
    },
    {
      "title": "Project Title",
      "largeImage": "img/portfolio/IMG_4492_Original.jpg",
      "smallImage": "img/portfolio/IMG_4492_Original.jpg"
    },
    {
      "title": "Project Title",
      "largeImage": "img/portfolio/IMG_3059_Original.jpg",
      "smallImage": "img/portfolio/IMG_3059_Original.jpg"
    },
    {
      "title": "Project Title",
      "largeImage": "img/portfolio/IMG_8104_Original.jpg",
      "smallImage": "img/portfolio/IMG_8104_Original.jpg"
    },
    {
      "title": "Project Title",
      "largeImage": "img/portfolio/IMG_4460_Original.jpg",
      "smallImage": "img/portfolio/IMG_4460_Original.jpg"
    },
    {
      "title": "Project Title",
      "largeImage": "img/portfolio/IMG_3776_Original.jpg",
      "smallImage": "img/portfolio/IMG_3776_Original.jpg"
    },
 
  ];

const Images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Image 1",
    title: "Lamborghini Huracan Performante",
    description:
      "The Huracán Performante has reworked the concept of super sports cars and taken the notion of performance to levels never seen before.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    alt: "Image 2 ",
    title: "Porsche 911 Turbo S",
    description:
      "This Turbo S variant comes with an engine putting out 641 bhp @ 6750 rpm and 800 Nm @ 2500 rpm of max power and max torque respectively.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "Image 3",
    title: "Ford Mustang",
    description: 
      "For offroad lovers. Super fast, Super Comfortable.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
    alt: "Image 4",
    title: "Lamborghini Aventador SV",
    description:
      "Aventador SV provide thrills unlike anything that has ever been experienced before.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    alt: "Image 5",
    title: "Ferrari 458 Speciale",
    description:
      "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds and the Spider is capable of a top speed of 400 km/h (249 mph).",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    alt: "Image 6",
    title: "Porsche 911",
    description:
      "The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1555353540-64580b51c258?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=378&q=80",
    alt: "Image 7",
    title: "Dodge Challenger",
    description:
      "The Challenger has a classic muscle-car interior, with a simple design",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/750x/88/33/1b/88331be20045f95b28e91e21fa663ad0.jpg",
    alt: "Image 8",
    title: "Lamborghini Gallardo",
    description:
      "The Gallardo is a 2 seater 10 cylinder car and has length of 4345mm, width of 1900mm and a wheelbase of 2560mm.",
  },
  {
    id: 9,
    src: "https://i.pinimg.com/564x/2e/40/02/2e40027b9b156589cfbccbf7b33d3bc7.jpg",
    alt: "Image 9",
    title: "2021 Mercedes-AMG GLE53 Coupe electrifies",
    description:
      "Its electric motor can provide up to 184 pound-feet of torque on demand.",
  },
];

// export const Events = (props) =>  {
//   return (

//   <>
//     <div className="sl-content">
//       <h1 className="sl-header">Car Gallery</h1>
//       <div className="sl-container">
//         <Slider {...settings}>
//           {Images.map((item) => (
//             <div key={item.id}>
//               <img src={item.src} alt={item.alt} className="sl-img" />
//               <h2 className="sl-title">{item.title}</h2>
//               <p className="sl-description">{item.description}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   </>

//   );
// }


// export const Events = (props) =>  {
//   return (

//   <>
//     <div className="sl-content">
//       <h1 className="sl-header">Car Gallery</h1>
//       <div className="sl-container">
//         <Slider {...settings}>
//           {GalleryImages.map((d, i) => (
//             <div key={i}>
//               <img src={d.largeImage} alt="" className="sl-img" />
//               <h2 className="sl-title">{d.title}</h2>
//               <p className="sl-description">test test test</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   </>

//   );
// }


export const Events = (props) =>  {

  const [open, setOpen] = React.useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
 
  return (

  <>
    <div className="sl-content">
      <h1 className="sl-header">Products</h1>
      <div className="sl-container">
      <Modal isOpen={open} onClose={handleClose}>
                <>
                    <h1>GFG</h1>
                    <h3>test</h3>
                </>
            </Modal>
        <Slider {...settings}>
          {props.data ? props.data.map((d, i) => (
   <div key={i}>
              <img src={d.largeImage} alt="" className="sl-img" />
              <h2 className="sl-title">{d.title}</h2>
              <button type="button" onClick={handleOpen}>
                Click Me to Open Modal
            </button>
           

            </div>
  )) : <div>"...Loading"</div>}
          

        </Slider>
      </div>
    </div>
  </>

  );
};