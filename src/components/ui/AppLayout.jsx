import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className=" overflow-hidden">
      <Outlet />
    </div>
  );
}

export default AppLayout;
