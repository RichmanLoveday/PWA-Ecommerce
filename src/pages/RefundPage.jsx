import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import { useEffect } from "react";
import Refund from "../features/refund/Refund";

function RefundPage() {
  useEffect(function () {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Refund />

      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
}

export default RefundPage;
