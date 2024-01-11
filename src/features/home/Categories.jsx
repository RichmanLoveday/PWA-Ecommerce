import { Col, Container, Row } from "react-bootstrap";
import SectionTittle from "../../components/common/SectionTittle";
import CategoriesCard from "./CategoriesCard";

function Categories() {
  return (
    <>
      <Container className="text-center" fluid={true}>
        <SectionTittle
          title="CATEGORIES"
          desc="Some Of Our Exclusive Collection, You May Like"
        />
        <Row className="justify-content-center mb-5">
          <CategoriesCard
            name="GROCERY"
            imgSrc="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
          />
          <CategoriesCard
            name="ELECTRONICS"
            imgSrc="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
          />
          <CategoriesCard
            name="BEAUTY, TOYS AND MORE"
            imgSrc="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100"
          />
          <CategoriesCard
            name="HOME AND FURNITURES"
            imgSrc="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
          />
          <CategoriesCard
            name="TRAVEL"
            imgSrc="https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"
          />
          <CategoriesCard
            name="APPLIANCES"
            imgSrc="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
          />
          <CategoriesCard
            name="APPLIANCES"
            imgSrc="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
          />
          <CategoriesCard
            name="FASHION"
            imgSrc="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
          />
           <CategoriesCard
            name="APPLIANCES"
            imgSrc="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100"
          />
           <CategoriesCard
            name="APPLIANCES"
            imgSrc="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100"
          />
        </Row>
      </Container>
    </>
  );
}

export default Categories;
