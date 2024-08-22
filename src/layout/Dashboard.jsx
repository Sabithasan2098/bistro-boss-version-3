import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartShopping, FaList } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu space-y-2">
          <li className="flex gap-2">
            <NavLink to={"/dashboard/userHome"}>
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li className="flex gap-2">
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li className="flex gap-2">
            <NavLink to={"/dashboard/cart"}>
              <FaCartShopping />
              My Cart
            </NavLink>
          </li>
          <li className="flex gap-2">
            <NavLink to={"/dashboard/review"}>
              <MdReviews />
              My Cart
            </NavLink>
          </li>
          <li className="flex gap-2">
            <NavLink to={"/dashboard/booking"}>
              <FaList />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="flex gap-2">
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li className="flex gap-2">
            <NavLink to={"/menu"}>
              <MdOutlineRestaurantMenu />
              Menu
            </NavLink>
          </li>
          <li className="flex gap-2">
            <NavLink to={"/contact"}>
              <IoMdContact />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 pl-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
