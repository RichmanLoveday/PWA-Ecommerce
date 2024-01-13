import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SectionTittle from "../../components/common/SectionTittle";
import FeaturedProductCard from "./FeaturedProductCard";

function FeaturedProducts() {
  return (
    <>
      <Container className="text-center" fluid={true}>
        <SectionTittle
          title={"FEATURED PRODUCTS"}
          desc={"Some Of Our Exclusive Collection, You May Like"}
        />

        <Row className="p-2">
          <FeaturedProductCard
            price={23}
            name={"RealME C21 (Cross Black, 64 GB)"}
            imgSrc={
              "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
            }
          />

          <FeaturedProductCard
            price={42}
            name={"RealME C21 (Cross Black, 64 GB)"}
            imgSrc={
              "https://images.unsplash.com/photo-1488509082528-cefbba5ad692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
            }
          />

          <FeaturedProductCard
            price={736}
            name={"RealME C21 (Cross Black, 64 GB)"}
            imgSrc={
              "https://plus.unsplash.com/premium_photo-1680623400141-7e129b7c56d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
            }
          />

          <FeaturedProductCard
            price={837}
            name={"RealME C21 (Cross Black, 64 GB)"}
            imgSrc={
              "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
            }
          />

          <FeaturedProductCard
            price={83}
            name={"RealME C21 (Cross Black, 64 GB)"}
            imgSrc={
              "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lfGVufDB8fDB8fHww"
            }
          />

          <FeaturedProductCard
            price={62}
            name={"RealME C21 (Cross Black, 64 GB)"}
            imgSrc={
              "https://plus.unsplash.com/premium_photo-1678722935741-8e224ffea472?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lfGVufDB8fDB8fHww"
            }
          />
        </Row>
      </Container>
    </>
  );
}

export default FeaturedProducts;
