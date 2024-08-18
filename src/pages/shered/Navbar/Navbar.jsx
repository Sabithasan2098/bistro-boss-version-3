import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <p className="flex items-center">
      <li>
        <NavLink to="/" activeClassName="bg-yellow-400 text-black" className="">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Menu"
          activeClassName="bg-yellow-400 text-black"
          className="hover:bg-yellow-400 hover:text-black"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Order/salad"
          activeClassName="bg-yellow-400 text-black"
          className="hover:bg-yellow-400 hover:text-black"
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          activeClassName="bg-yellow-400 text-black"
          className="hover:bg-yellow-400 hover:text-black"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/secret"
          activeClassName="bg-yellow-400 text-black"
          className="hover:bg-yellow-400 hover:text-black"
        >
          Secret
        </NavLink>
      </li>

      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="hover:bg-yellow-400 hover:text-black
             active:bg-yellow-400 active:text-black rounded-lg px-4"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink
              to="/login"
              activeClassName="bg-yellow-400 text-black"
              className="hover:bg-yellow-400 hover:text-black"
            >
              Login
            </NavLink>
          </li>{" "}
        </>
      )}
      <li>
        <NavLink to="/">
          <button className="btn">
            <FaCartShopping />
            <div className="badge badge-secondary">+0</div>
          </button>
        </NavLink>
      </li>
    </p>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-25 text-white bg-black max-w-screen-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-10 h-10 rounded-full border-2 border-yellow-400"
          />
        ) : (
          <p className="text-yellow-400">No Profile Picture</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
