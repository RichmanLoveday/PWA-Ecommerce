import { Button, Col, Container, Navbar, Row } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import MegaMenuAll from "./MegaMenuAll";

function NavMenuDesktop() {
  const [openMenBar, setOpenMenuBar] = useState("sideNavClose");
  const [contentOverlay, setContentOverlay] = useState("ContentOverlayClose");

  const handleMenuBarClick = () => {
    if (openMenBar === "sideNavClose") {
      setOpenMenuBar("sideNavOpen");
      setContentOverlay("ContentOverlayOpen");
      return;
    }

    setOpenMenuBar("sideNavClose");
    setContentOverlay("ContentOverlayClose");
  };

  const handleOverLayClick = () => {
    if (contentOverlay === "ContentOverlayClose ") {
      setOpenMenuBar("sideNavOpen");
      setContentOverlay("ContentOverlayOpen");
      return;
    }

    setOpenMenuBar("sideNavClose");
    setContentOverlay("ContentOverlayClose");
  };

  return (
    <>
      <div className="TopSectionDown">
        <Navbar
          expand="lg"
          className="bg-body-tertiary fixed-top bg-white navbar"
        >
          <Container
            fluid={true}
            className="p-2 mb-0 fixed-top shadow-sm bg-white"
          >
            <Row className="w-100">
              <Col lg={4} sm={12} md={4} xxl={12}>
                <Button className="btn btn-sm h-4" onClick={handleMenuBarClick}>
                  <i className="fa fa-bars"></i>
                </Button>
                <Link to="/">
                  <img className="nav-logo" src={Logo} alt="" />
                </Link>
              </Col>
              <Col lg={4} sm={12} md={4} xxl={12} className="p-1 mt-1">
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn site-btn p-2">
                    <i className="fa fa-search"></i>
                  </Button>
                </div>
              </Col>
              <Col lg={4} sm={12} md={4} xxl={12} className="p-1 mt-1">
                <Link to="/" className="btn">
                  <i className="fa fa-heart h-4"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>
                <Link to="/" className="btn">
                  <i className="fa fa-bell h-4"></i>
                  <sup>
                    <span className="badge text-white bg-danger">5</span>
                  </sup>
                </Link>

                <a className="btn">
                  <i className="fa h-4 fa-mobile-alt"></i>
                </a>
                <Link to="/login" className="h-4 btn">
                  LOGIN
                </Link>
                <Button className="cart-btn h-4">
                  <i className="fa fa-shopping-cart me-2"></i>3 Items
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>

      <div className={openMenBar}>
        <MegaMenuAll />
        <hr className="w-80" />

        {/* <div className="list-group">
            <a className="list-group-item nav-font nav-item list-group-item-action">
              <i className="fa mr-2 fa-home">Home</i>
            </a>
          </div> */}
      </div>

      <div className={contentOverlay} onClick={handleOverLayClick}></div>
    </>
  );
}

export default NavMenuDesktop;
