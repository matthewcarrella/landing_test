import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    {
        id: 1,
        src: "https://picsum.photos/id/1018/1000/600/",
        alt: "Image 1",
    },
    {
        id: 2,
        src: "https://picsum.photos/id/1015/1000/600/",
        alt: "Image 2 ",
    },
    {
        id: 3,
        src: "https://picsum.photos/id/1019/1000/600/",
        alt: "Image 3",
    },
];

const ImageSlider = ({ images }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <div className="tag">
                <h1>Image Gallery</h1>
            </div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img
                                src={item.src}
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export const Events = (props) => {
    return ( <ImageSlider images={images} />);
  };