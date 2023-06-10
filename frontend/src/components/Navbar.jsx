import { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const handleNav = () => {
    const navMenu = document.querySelector("#nav-menu");
    if (showNav === false) {
      navMenu.classList.remove("hidden");
      navMenu.classList.add("flex");
      setShowNav(true);
    } else {
      navMenu.classList.add("hidden");
      navMenu.classList.remove("flex");
      setShowNav(false);
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    handleNav();
  };
  return (
    <>
      <div className=" h-20 mb-5">
        <nav className=" fixed top-0 left-0 w-full h-20 px-2 sm:px-5 md:px-10 lg:px-16 xl:px-24 bg-indigo-100 shadow-sm flex items-center justify-between">
          <NavLink to="">
            <img src={logo} alt="iNotes" width="150px" height="50px" />
          </NavLink>
          <ul className="hidden w-1/2 md:w-2/5 lg:w-1/3 sm:flex justify-between md:justify-around">
            <NavLink
              to="/"
              className=" text-lg text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
            >
              Home
            </NavLink>
            <NavLink
              to="/notes"
              className=" text-lg text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
            >
              Notes
            </NavLink>
            <NavLink
              to="about"
              className=" text-lg text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
            >
              About
            </NavLink>
          </ul>
          {auth ? (
            <button
              onClick={handleLogout}
              className=" hidden sm:inline-block uppercase text-base font-bold text-red-500 hover:text-red-600 p-2 rounded-md hover:border-2 hover:border-red-500 transition-all cursor-pointer"
            >
              Logout -&gt;
            </button>
          ) : (
            <NavLink
              to="/login"
              className=" hidden sm:inline-block uppercase text-base font-bold text-blue-500 hover:text-blue-600 p-2 rounded-md hover:border-2 hover:border-blue-500 transition-all cursor-pointer"
            >
              Login/Register
            </NavLink>
          )}
          <div
            onClick={handleNav}
            className="inline-block sm:hidden z-20 cursor-pointer"
          >
            <div className=" w-6 h-2 border-b-[3px] border-slate-800"></div>
            <div className=" w-6 h-2 border-b-[3px] border-slate-800"></div>
            <div className=" w-6 h-2 border-b-[3px] border-slate-800"></div>
          </div>
          <ul
            id="nav-menu"
            className="hidden flex-col justify-around items-center sm:hidden absolute top-0 left-0 w-full h-screen bg-white text-center pt-16 pb-32 z-10"
          >
            <NavLink
              onClick={handleNav}
              to="/"
              className=" text-lg text-slate-500 hover:text-slate-800 font-semibold cursor-pointer py-4"
            >
              Home
            </NavLink>
            <NavLink
              onClick={handleNav}
              to="/notes"
              className=" text-lg text-slate-500 hover:text-slate-800 font-semibold cursor-pointer py-4"
            >
              Notes
            </NavLink>
            <NavLink
              onClick={handleNav}
              to="/about"
              className=" text-lg text-slate-500 hover:text-slate-800 font-semibold cursor-pointer py-4"
            >
              About
            </NavLink>
            {auth ? (
              <button
                onClick={handleLogout}
                className=" text-lg text-red-500 hover:text-red-600 font-semibold cursor-pointer py-4"
              >
                Logout
              </button>
            ) : (
              <NavLink
                onClick={handleNav}
                to="/login"
                className=" text-lg text-blue-500 hover:text-blue-600 font-semibold cursor-pointer py-4"
              >
                Login/Register
              </NavLink>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
