import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import SectionTittle from "../../components/common/SectionTittle";

function Collection() {
  return (
    <>
      <Container className="text-center">
        <SectionTittle
          title="PRODUCT COLLECTION"
          desc="Some of our Exclusive Collection, You May Like"
        />

        <Row className="justify-content-center">
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/u/5/m-oversizetsrt-101-kajaru-original-imagwgnnhrcxt5ej.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  Men Printed Round Neck Poly Cotton Green T-Shirt
                </p>
                <p className="product-price-on-card">Price: $300</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/l/d/s-st28-vebnor-original-imagq6aqgh2hzv22.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  Men Printed Round Neck Poly Cotton Green T-Shirt
                </p>
                <p className="product-price-on-card">Price: $300</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/d/f/3xl-13-lstr-wine-vtexx-original-imagnzbummhkgr7p.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  Men Regular Fit Solid Spread Collar Formal Shirt
                </p>
                <p className="product-price-on-card">Price: $300</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/u/h/m-st2-vebnor-original-imagpw7w3ha4tv2h.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  Men Regular Fit Solid Spread Collar Casual Shir
                </p>
                <p className="product-price-on-card">Price: $300</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/u/h/m-st2-vebnor-original-imagpw7w3ha4tv2h.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  Men Regular Fit Solid Spread Collar Casual Shir
                </p>
                <p className="product-price-on-card">Price: $300</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/u/h/m-st2-vebnor-original-imagpw7w3ha4tv2h.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  Men Regular Fit Solid Spread Collar Casual Shir
                </p>
                <p className="product-price-on-card">Price: $300</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
            <Card className="image-box">
              <img
                className="center"
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/x/u/h/m-st2-vebnor-original-imagpw7w3ha4tv2h.jpeg?q=70"
                alt=""
              />
              <Card.Body>
                <p className="product-name-on-card">
                  Men Regular Fit Solid Spread Collar Casual Shir
                </p>
                <p className="product-price-on-card">Price: $300</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Collection;
