import { Button, Card, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTittle from "../../components/common/SectionTittle";
import { useRef } from "react";

function NewArrival() {
  const sliderRef = useRef(null);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
      <Container className="text-center" fluid={true}>
        <SectionTittle
          title="NEW ARRIVAL"
          desc="Some of Our Exclusive Arrivals You may Like"
        />
        <div className="mb-4 d-flex justify-content-center w-100">
          <Button className="site-btn btn-sm ml-2 me-3 p-2" onClick={prev}>
            <i className="fa fa-angle-left"></i>
          </Button>
          <Button className="site-btn btn-sm ml-2 ms-3 p-2" onClick={next}>
            <i className="fa fa-angle-right"></i>
          </Button>
        </div>

        <Row>
          <Slider ref={sliderRef} {...settings}>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/l1l1rww0/watch/5/w/u/1-black-dial-digital-watch-for-boys-black-sports-watch-men-original-imagd4yzszbgba39.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  RealME C21 (Cross Black, 64 GB)
                </p>
                <p className="product-price-on-card">Price: $200</p>
              </Card.Body>
            </Card>

            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/xif0q/watch/m/6/m/-bg-enhanced-original-imaguny8qwayrbtz.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  RealME C21 (Cross Black, 64 GB)
                </p>
                <p className="product-price-on-card">Price: $200</p>
              </Card.Body>
            </Card>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/a/2/9/-original-imagrgwwh9dzgzwv.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  RealME C21 (Cross Black, 64 GB)
                </p>
                <p className="product-price-on-card">Price: $200</p>
              </Card.Body>
            </Card>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/i/q/e/-original-imagnre8pbpnfhgz.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  RealME C21 (Cross Black, 64 GB)
                </p>
                <p className="product-price-on-card">Price: $200</p>
              </Card.Body>
            </Card>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/l1l1rww0/watch/j/c/d/1-ls3084-limestone-men-original-imagd42hfjchdqau.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  RealME C21 (Cross Black, 64 GB)
                </p>
                <p className="product-price-on-card">Price: $200</p>
              </Card.Body>
            </Card>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/f/f/l/2-ml-30-mercy-boys-original-imagg4gbchgq59ug.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  RealME C21 (Cross Black, 64 GB)
                </p>
                <p className="product-price-on-card">Price: $200</p>
              </Card.Body>
            </Card>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/y/q/new-designer-pink-red-strap-watch-and-2-bracelet-for-women-original-imagnh9cphzyaedj.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  RealME C21 (Cross Black, 64 GB)
                </p>
                <p className="product-price-on-card">Price: $200</p>
              </Card.Body>
            </Card>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/xif0q/watch/w/6/p/-bg-enhanced-original-imagrk9ruttgssg5.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  RealME C21 (Cross Black, 64 GB)
                </p>
                <p className="product-price-on-card">Price: $200</p>
              </Card.Body>
            </Card>
          </Slider>
        </Row>
      </Container>
    </>
  );
}

export default NewArrival;
