import { Container } from "react-bootstrap";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import Categories from "../features/home/Categories";
import Collection from "../features/home/Collection";
import FeaturedProducts from "../features/home/FeaturedProducts";
import HomeTop from "../features/home/HomeTop";
import HomeTopMobile from "../features/home/HomeTopMobile";
import NewArrival from "../features/home/NewArrival";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import { useEffect } from "react";

function HomePage() {
  useEffect(function () {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
        <HomeTop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
        <HomeTopMobile />
      </div>

      <FeaturedProducts />
      <NewArrival />
      <Categories />
      <Collection />
      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
}

export default HomePage;
