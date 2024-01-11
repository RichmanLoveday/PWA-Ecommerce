import { Card, Col } from "react-bootstrap";

function FeaturedProductCard({ imgSrc, name, price }) {
  return (
    <Col className="p-1" key={1} xl={2} lg={2} sm={4} md={2} xs={6}>
      <Card className="image-box">
        <img className="center" src={imgSrc} alt="" />
        <Card.Body>
          <p className="product-name-on-card">{name}</p>
          <p className="product-price-on-card">Price: ${price}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FeaturedProductCard;
