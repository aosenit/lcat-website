"use client";
import useStore from "@/app/store/useStore";
import Image from "next/image";
import { FiArrowDown, FiArrowRight, FiMenu } from "react-icons/fi";
import RotatingText from "../RotatingText";
import CurvedText from "../RotatingText";
const Header = () => {
  const { setOpenNav }: any = useStore();
  return (
    <header className=" h-[100vh]" id="home">
      <div className="z-[1000] flex items-center justify-between h-[12vh] container fixed w-full left-0 top-0 right-0  ">
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
        className="h-full z-[10]  bg-cover bg-no-repeat bg-top bg-blend-overlay bg-gray-800 relative"
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
          <h3 className="text-sm max-w-[55ch]">
            Book Your Airport Shuttle Today and Save{" "}
            <span className="text-2xl text-[var(--theme-color)]">20%</span>
          </h3>

          <div className="flex items-center rotate-90 -translate-x-10 translate-y-10 gap-3 text-gray-400 transition hover:text-white">
            <a href="#about">
              <span className="">EXPLORE</span>
            </a>
            <FiArrowRight />
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-[0%]">
          <CurvedText />
        </div>
      </div>
    </header>
  );
};

export default Header;
