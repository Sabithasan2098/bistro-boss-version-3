import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shered/Footer/Footer";
import Navbar from "../pages/shered/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
