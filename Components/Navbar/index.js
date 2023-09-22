"use client";
import React, { useEffect, useRef } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { useRouter } from "next/navigation";

import { useState } from "react";

import Link from "next/link";
import AnimatedMenuIcon from "./AnimatedMenuIcon";
const index = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
  };
  const closeMenu = () => {
    setNav(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Function to close the dropdown when clicking outside of it
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Add the event listener when the dropdown is open
    if (isDropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or the dropdown closes
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    // Redirect to the login page when the "Login" button is clicked
    router.push("/login");
    // Close the dropdown after redirection (optional)
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={` max-w-screen-xl px-5 mx-auto
        py-5   w-full `}
    >
      <div className="flex w-full justify-between items-center bg-transparent  ">
        {/* left  */}
        <div className=" flex items-center  z-20">
          {/* logo  */}
          <Link href={"/"}>
            <img src="/logo.png" alt="" className="w-[200px]" />
          </Link>
        </div>
        <div>
          <ul className="cont hidden md:flex space-x-12 text-base text-white  font-[400] text-[16px]">
            <button
              onClick={() => router.push("/")}
              className={` li text-[16px] z-20`}
            >
              <p className="a">Home</p>
            </button>
            <button
              onClick={() => router.push("/mission")}
              className="li text-[16px]  z-20"
            >
              <p className="a">Our Mission</p>
            </button>
            <Link href="/about">
              <button className="li text-[16px]  z-20">
                <p className="a">About Us</p>
              </button>
            </Link>
            <Link href="/contact">
              <button className="li text-[16px]  z-20">
                <p className="a">Contact Us</p>
              </button>
            </Link>
          </ul>
        </div>
        {/* right */}
        <div className="hidden md:flex items-center gap-10">
          {/* sign in */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleLogin}
              className="flex items-center space-x-2 rounded-md bg-[#1a401f] px-12 font-[500] py-3 "
            >
              Login
            </button>
          </div>
          <div className="relative" ref={dropdownRef} style={{cursor: 'pointer'}}>
            {/* <button
              onClick={handleLogin}
              className="flex items-center space-x-2 rounded-md bg-[#1a401f] px-12 font-[500] py-3 "
            >
              Login
            </button> */}
            <FaUserCircle size={30} onClick={() => router.push('/user')}/>
          </div>
          {/* start a project  */}
        </div>

        {/* mobile menu  */}
        <div
          onClick={handleNavbar}
          className="sm:block md:hidden flex items-center z-50"
        >
          <AnimatedMenuIcon isOpen={nav} onClick={handleNavbar} />
        </div>
        <div
          className={
            nav
              ? "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-hidden bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen  bg-black text-white  text-right ease-linear duration-200 transform translate-x-0"
              : "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-hidden bottom-0 flex justify-start items-start py-20 px-5 w-80 h-screen d bg-black text-white text-right ease-linear duration-200  transform translate-x-full"
          }
        >
          <div className="flex flex-col mt-[-3.5rem] ">
            <div className="flex flex-col basis-[50%]">
              <ul className="flex flex-col justify-start items-start gap-5 text-2xl font-bold mt-3">
                <button
                  onClick={() => router.push("/")}
                  className={` li text-[16px] z-20`}
                >
                  <p className="a" onClick={closeMenu}>
                    Home
                  </p>
                </button>
                <button
                  onClick={() => {
                    router.push("/mission");
                  }}
                  className="li text-[16px]  z-20"
                >
                  <p onClick={closeMenu} className="a">
                    Our Mission
                  </p>
                </button>
                <Link href="/about">
                  <button onClick={closeMenu} className="li text-[16px]  z-20">
                    <p className="a">About Us</p>
                  </button>
                </Link>
                <Link href="/contact">
                  <button onClick={closeMenu} className="li text-[16px]  z-20">
                    <p className="a">Contact Us</p>
                  </button>
                </Link>
              </ul>
              <div className="flex flex-col justify-start items-start gap-y-6 mt-5">
                <Link href={"/"} onClick={handleLogin}>
                  <button
                    onClick={closeMenu}
                    className="flex items-center space-x-2 rounded-md bg-[#1a401f] px-12 font-[500] py-3 "
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
