"use client";

//imports icons
import { ArrowPathIcon, Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import "./transitionNavbar.css";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    return setToggle(!toggle);
  };

  return (
    <nav className="w-full h-[70px] bg-whiteBg fixed top-0 border-b-[1px] border-secondGray">
      <div className="px-5 h-full flex items-center justify-between">
        <figure>
          <img src="./assetsHome/Logo.svg" alt="Logo Carrtes" className="w-12 h-12" />
        </figure>
        <span
          className=" w-[59px] h-[59px] flex justify-center border border-secondGray rounded-[100%] cursor-pointer"
          onClick={toggleMenu}
        >
          <Bars3Icon className="w-[24px] text-hardRose " />
        </span>
      </div>
      <div
        className={`w-[100%] h-screen absolute top-[70px] bg-[rgba(0,0,0,30%)] flex justify-end ${
          toggle ? "vissible" : "hidde"
        }`}
      >
        <div className="w-[300px] h-full bg-whiteBg flex flex-col">
          <p className="text-hardRose ml-4 mt-6 font-bold text-[18px]">
            Servicios
          </p>
          <ul className="text-textParagraph text-center mt-6 flex flex-col items-center">
            <Link
              href="/desayunos"
              className="flex items-center w-[100%] hover:bg-mediumRose movement h-14 border-l-8 hover:border-hardRose"
            >
              <ArrowPathIcon className="size-[24px] ml-2" />
              <li className="ml-3 text-[18px] ">Desayunos</li>
            </Link>
            <Link
              href="/cajas"
              className="flex items-center  w-[100%] hover:bg-mediumRose movement h-14 border-l-8 hover:border-hardRose" 
            >
              <ArrowPathIcon className="size-[24px] ml-2" />
              <li className="ml-3 text-[18px]">Cajas sorpresa</li>
            </Link>
            <Link
              href="/decoraciones"
              className="flex items-center w-[100%] hover:bg-mediumRose movement h-14 border-l-8 hover:border-hardRose"
            >
              <ArrowPathIcon className="size-[24px] ml-2" />
              <li className="ml-3 text-[18px]">Decoraciones</li>
            </Link>
            <Link
              href="/fresas"
              className="flex items-center w-[100%] hover:bg-mediumRose movement  h-14 border-l-8 hover:border-hardRose"
            >
              <ArrowPathIcon className="size-[24px] ml-2" />
              <li className="ml-3 text-[18px]">Fresas</li>
            </Link>
            <Link
              href="/otther"
              className="flex items-center w-[100%] hover:bg-mediumRose movement h-14 border-l-8 hover:border-hardRose"
            >
              <ArrowPathIcon className="size-[24px] ml-2" />
              <li className="ml-3 text-[18px]">Otros servicios</li>
            </Link>
          </ul>
          <Link href="/">
          <button className="mt-[350px] ml-7 h-12 text-textTitle bg-hardRose rounded-lg cursor-pointer w-[80%]">
            Inicio
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export { Navbar };
