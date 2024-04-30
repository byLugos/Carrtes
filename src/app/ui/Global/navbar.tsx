"use client";

//imports icons
import { Bars3Icon } from "@heroicons/react/16/solid";

import { useState } from "react";

import "./transitionNavbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    return setToggle(!toggle);
  };

  return (
    <nav className="w-full h-[70px] bg-whiteBg fixed top-0 ">
      <div className="px-5 h-full flex items-center justify-between">
        <figure>
          <img
            src="./assetsHome/Logo.svg"
            alt="Logo Carrtes"
          />
        </figure>
        <span
          className=" w-[59px] h-[59px] flex justify-center border border-gray-400 rounded-[100%] cursor-pointer"
          onClick={toggleMenu}
        >
          <Bars3Icon className="w-[24px] text-hardRose" />
        </span>
      </div>
      <div
        className={`w-[100%] h-screen absolute top-[70px] bg-[rgba(0,0,0,30%)] flex justify-end ${
          toggle ? "vissible" : "hidde"
        }`}
      >
        <div className="w-[300px] h-full bg-whiteBg"><hr className="border-t-4 border-gray-400"></hr></div>
      </div>
      <hr className="border-t-2 border-gray-400"></hr>
    </nav>
  );
};
export { Navbar };
