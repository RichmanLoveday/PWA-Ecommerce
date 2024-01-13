import { Col, Container, Row } from "react-bootstrap";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";

function FooterMobile() {
  return (
    <>
      <div className="footerback shadow-sm m-0 mt-5 pt-3">
        <Container className="text-center">
          <Row className="px-0 my-5">
            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
              <p>
                No 30 Oro Aka Street Rumuagholu Port Harcourt.
                <br />
                Email: lovedayrichman@yahoo.com
              </p>
              <h5 className="footer-menu-title">SOCIAL LINK</h5>
              <a href="#">
                <i className="fab m-1 fa-facebook h4"></i>
              </a>
              <a href="#">
                <i className="fab m-1 fa-instagram h4"></i>
              </a>
              <a href="#">
                <i className="fab m-1 fa-twitter h4"></i>
              </a>
            </Col>

            <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
              <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
              <div className="d-flex flex-column">
                <a href="">
                  <img src={Google} alt="" />
                </a>
                <a href="">
                  <img className="mt-2" src={Apple} alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          fluid={true}
          className="text-center m-0 pt-3 pb-1 bg-dark text-white"
        >
          <Container>
            <Row>
              <h6>Copyright 2024 by richman loveday, All Rights Reserved</h6>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default FooterMobile;
