import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Login from "../../assets/images/login.png";

function UserLogin() {
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
                  <h4 className="section-title-login">USER SIGN IN</h4>
                  <h6 className="section-sub-title">
                    Please Enter Your Mobile Number
                  </h6>

                  <input
                    className="form-control m-2"
                    type="text"
                    placeholder="Enter Mobile Number"
                  />
                  <Button className="btn btn-block m-2 site-btn-login">
                    Next
                  </Button>
                </Form>
              </Col>
              <Col className="p-0 Desktop m-0" md={6} lg={6} sm={12} xs={12}>
                <img src={Login} className="onboardBanner" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserLogin;
