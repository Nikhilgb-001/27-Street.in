import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import Searchbar from "./Searchbar";
// import Routes from "../utils/Routes";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!open);
  };
  return (
    <div className="main">
      <nav className="fixed w-full h-16 top-0 py-4 px-8 z-10 backdrop-blur-lg border-b bg-zinc-950 text-white border-neutral-700/80 border-zinc-600">
        <div className="nav-container container px-4 mx-auto relative ">
          <div className="masker flex justify-between items-center">
            <div className="logo-dvi flex items-center flex-shrink-0">
              <a href="/">
                <h1 className="font-semibold italic">27Street.in</h1>
              </a>
            </div>

            <ul className="links hidden lg:flex ml-14 space-x-12">
              {["Home", "Products", "Reviews"].map((item) => {
                return (
                  <li
                    key={item}
                    className="text-sm font-normal hover:text-green-400 ease-linear duration-200"
                  >
                    <NavLink
                      className={(e) => {
                        return [
                          e.isActive ? "text-green-700" : "",
                          e.isActive ? "font-bold" : "",
                        ].join(" ");
                      }}
                      to={`/${item.toLowerCase()}`}
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="buttons-div hidden lg:flex justify-center space-x-12 items-center">
              <div className="searcbar">
                <Searchbar />
              </div>

              <div className="sign-in">
                <NavLink
                  to="#sign-in"
                  className="px-4 py-2 border border-zinc-400 rounded-md"
                  href="/login"
                >
                  Sign In
                </NavLink>
              </div>

              <div className="cart">
                <IoCartOutline className="text-3xl" />
              </div>
            </div>

            {/* Mobile Menue */}
            <div className="lg:hidden md:flex flex-col justify-end ">
              <button className="text-white" onClick={toggleNavbar}>
                {open ? <RxCross1 /> : <RiMenu3Line />}
              </button>
            </div>
          </div>
          {open && (
            <div className="fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul className="links text-white">
                {["Home", "Products", "About", "Contact"].map((item) => {
                  return (
                    <li
                      key={item}
                      className="text-sm font-normal hover:text-green-400 ease-linear mb-4 duration-200"
                    >
                      <NavLink
                        className={(e) => {
                          return [
                            e.isActive ? "text-green-700" : "",
                            e.isActive ? "font-bold" : "",
                          ].join(" ");
                        }}
                        to={`/${item}`}
                      >
                        {item}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-center">
                <NavLink
                  className="px-4 py-2 border text-white border-zinc-400 rounded-md"
                  href="/login"
                >
                  Sign In
                </NavLink>
              </div>

              <div className="cart text-white mt-16">
                <IoCartOutline className="text-3xl" />
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* <Routes /> */}
    </div>
  );
};

export default Navbar;
