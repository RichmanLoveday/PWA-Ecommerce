import { Card, Col } from "react-bootstrap";

function CategoriesCard({ name, imgSrc }) {
  return (
    <Col className="p-1" key={name} xl={1} lg={3} md={4} sm={6} xs={6}>
      <Card className="h-100 w-100 text-center">
        <Card.Body>
          {/* Replace the image source with your actual image source */}
          <img
            className="center"
            src={imgSrc} // Replace with your image source
            alt=""
          />
          <h5 className="category-name">{name}</h5>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CategoriesCard;
