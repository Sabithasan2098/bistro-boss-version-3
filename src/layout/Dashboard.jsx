import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaCartShopping, FaList } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu space-y-2">
          {isAdmin ? (
            <>
              <li className="flex gap-2">
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li className="flex gap-2">
                <NavLink to={"/dashboard/addItems"}>
                  <MdOutlineRestaurantMenu />
                  Add Items
                </NavLink>
              </li>
              <li className="flex gap-2">
                <NavLink to={"/dashboard/manageItems"}>
                  <TfiMenuAlt />
                  Manage Items
                </NavLink>
              </li>
              <li className="flex gap-2">
                <NavLink to={"/dashboard/manageBookings"}>
                  <RiContactsBook2Fill />
                  Manage Booking
                </NavLink>
              </li>
              <li className="flex gap-2">
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers />
                  All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex gap-2">
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li className="flex gap-2">
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaCalendar />
                  Payment History
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
                  Review
                </NavLink>
              </li>
              <li className="flex gap-2">
                <NavLink to={"/dashboard/booking"}>
                  <FaList />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li className="flex gap-2">
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li className="flex gap-2">
            <NavLink to={"/menu"}>
              <GiHamburgerMenu />
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
