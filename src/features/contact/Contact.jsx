import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container>
        <Row className="p-2">
          <Col
            className="shadow-sm bg-white mt-2"
            md={12}
            lg={12}
            sm={12}
            xs={12}
          >
            <Row className="text-center">
              <Col
                className="d-flex justify-content-center"
                md={6}
                lg={6}
                sm={12}
                xs={12}
              >
                <Form className="onboardForm">
                  <h4 className="section-title-login">CONTACT WITH US</h4>
                  <h6 className="section-sub-title">Please Contact With Us</h6>

                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Mobile Number"
                  />

                  <input
                    className="form-control m-2"
                    type="email"
                    placeholder="Enter Your Email"
                  />

                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Your Message"
                  />
                  <Button className="btn btn-block m-2 site-btn-login">
                    Send
                  </Button>
                </Form>
              </Col>
              <Col
                className="p-0 Desktop m-0 mt-5"
                md={6}
                lg={6}
                sm={12}
                xs={12}
              >
                <p className="section-title-contact">
                  No 30 Oro Aka Street Rumuagholu Port Harcourt.
                  <br />
                  Email: lovedayrichman@yahoo.com
                </p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3576242811814!2d6.975598974818771!3d4.879630395096136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d1c76d285013%3A0x4df58e299911a009!2sRumuaghaolu%20Road%2C%20Port%20Harcourt%20500102%2C%20Rivers!5e0!3m2!1sen!2sng!4v1705156602742!5m2!1sen!2sng"
                  width="550"
                  height="450"
                  styles="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  title="contact"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
