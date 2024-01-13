import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Slider1 from "../../assets/images/slider1.jpg";
import Slider2 from "../../assets/images/slider2.jpg";
import Slider3 from "../../assets/images/slider3.jpg";

function HomeSlider() {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="">
        <div>
          <Slider {...settings}>
            <div>
              <img src={Slider1} className="slider-img" alt="" />
            </div>
            <div>
              <img src={Slider2} className="slider-img" alt="" />
            </div>
            <div>
              <img src={Slider3} className="slider-img" alt="" />
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default HomeSlider;
