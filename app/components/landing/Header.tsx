"use client";
import useStore from "@/app/store/useStore";
import Image from "next/image";
import { FiArrowDown, FiArrowRight, FiMenu } from "react-icons/fi";
const Header = () => {
  const { setOpenNav }: any = useStore();
  return (
    <header className=" h-[100vh]  " id="home">
      <div className="z-[1000] flex items-center justify-between h-[12vh] container fixed w-full left-0 top-0 bg-[rgb(0,0,0,.4)]">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={180}
          height={50}
          className="object-contain"
        />
        <div className="w-14 h-14  grid place-items-center hover:bg-gray-700 cursor-pointer transition">
          <FiMenu
            className="text-[30px] text-[var(--theme-color)] transition cursor-pointer"
            onClick={() => setOpenNav()}
          />
        </div>
      </div>

      <div
        className="h-full z-[10]  bg-cover bg-no-repeat bg-top bg-blend-overlay bg-gray-800 "
        style={{
          backgroundImage: `url("/images/hero-bg.jpg")`,
        }}
      >
        <div className="text-white relative text-left flex flex-col gap-8 justify-center items-start h-full container ">
          <h1
            className="text-[40px] leading-10 font-bold w-[8ch] lg:text-[60px] lg:leading-tight"
            style={{ fontFamily: `var(--fFTwo)` }}
          >
            THE AIRPORT TRANSFER PLUG
          </h1>
          <p className="text-gray-300 max-w-[55ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            sequi. Consequatur doloribus eaque illum perferendis minus
            necessitatibus laborum quam eius.
          </p>
          <div className="flex items-center rotate-90 -translate-x-10 translate-y-10 gap-3 text-gray-400 transition hover:text-white">
            <a href="#about">
              <span className="">EXPLORE</span>
            </a>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
