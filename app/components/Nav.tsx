"use client";
import Image from "next/image";
import React from "react";
import { FiX } from "react-icons/fi";
import useStore from "../store/useStore";

const navData = ["Home", "About", "Services", "Articles", "Contact"];

interface IStore {
  setCloseNav?: (a: boolean) => void;
  navMenuState?: boolean;
}

const Nav = () => {
  const { setCloseNav, navMenuState }: any = useStore();

  return (
    <>
      {navMenuState && (
        <nav className="w-screen h-screen fixed top-0 left-0 z-[100000] bg-[var(--background-color)]">
          <div className="z-[1000] flex items-center justify-between h-[14vh] container fixed w-full left-0 top-0">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={"180"}
              height={"50"}
              className="object-contain"
            />
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hidden md:flex justify-center gap-2 items-center text-sm hover:primary-text transition text-gray-300 border-[1px] border-gray-300 w-fit px-10 py-3 hover:bg-white hover:text-black rounded-3xl"
              >
                <span className="font-extrabold"> GET IN TOUCH</span>
              </a>
              <div className="  grid place-items-center cursor-pointer transition">
                <FiX
                  className="text-[30px] text-white transition cursor-pointer hover:text-red-500"
                  onClick={() => setCloseNav()}
                />
              </div>
            </div>
          </div>
          <ul
            className="h-full w-full grid place-content-center gap-1 relative"
            style={{ fontFamily: `var(--fFTwo)` }}
          >
            {navData.map((n, i) => (
              <li key={i}>
                <a
                  onClick={() => setCloseNav()}
                  href={`#${n.toLowerCase()}`}
                  className="text-[6vh] md:text-[8vh] leading-tight hover:text-[var(--theme-color)] font-extrabold"
                >
                  {n.toUpperCase()}
                </a>
              </li>
            ))}
            <a
              href="#"
              className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-[18%] flex justify-center gap-2 items-center text-sm hover:primary-text transition text-gray-300 border-[1px] border-gray-300  px-10 py-5 hover:bg-white hover:text-black rounded-[2rem] w-[90%] container"
            >
              <span className="font-extrabold"> GET IN TOUCH</span>
            </a>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Nav;
