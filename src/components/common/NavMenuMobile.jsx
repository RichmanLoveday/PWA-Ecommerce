import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/easyshop.png";
import { useState } from "react";
import MegaMenuMobile from "./MegaMenuMobile";

function NavMenuMobile() {
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
              <Button className="cart-btn h-4 float-end">
                <i className="fa fa-shopping-cart me-2"></i>3 Items
              </Button>
            </Col>
            <Col lg={4} sm={12} md={4} xxl={12} className="p-1 mt-1"></Col>
          </Row>
        </Container>

        <div className={openMenBar}>
          <MegaMenuMobile />
          <hr className="w-80" />

          {/* <div className="list-group">
            <a className="list-group-item nav-font nav-item list-group-item-action">
              <i className="fa mr-2 fa-home">Home</i>
            </a>
          </div> */}
        </div>

        <div className={contentOverlay} onClick={handleOverLayClick}></div>
      </div>
    </>
  );
}

export default NavMenuMobile;
