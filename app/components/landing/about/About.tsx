import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const About = () => (
  <div className="text-white border-t-gray-500 border-t-[1px]" id="about">
    <div className="container pt-10 md:grid grid-cols-3 gap-4 place-items-center h-full lg:min-h-[88vh]   lg:items-center">
      <div className="mt-4 mb-8 md:col-span-1">
        <h2
          className=" text-2xl md:text-4xl"
          style={{ fontFamily: "var(--fFTwo)" }}
        >
          <b>ABOUT US</b>
        </h2>
        <p className="text-gray-300 my-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus fuga repellendus iusto sequi enim tempore dicta laborum
          nostrum accusantium odit!
        </p>
        <a
          href="#contact"
          className="flex justify-center gap-2 items-center text-sm hover:primary-text transition text-gray-300 border-[1px] border-gray-300 w-fit px-10 py-3 hover:bg-white hover:text-black"
        >
          <span> CONTACT</span> <FiArrowRight className="text-[20px]" />
        </a>
      </div>

      <div className="grid gap-8 md:col-span-2 md:grid-cols-2 md:gap-4">
        <div className="w-full h-[300px] lg:h-[400px]">
          <Image
            src={"/images/about-image.jpg"}
            alt="about image"
            height={300}
            width={300}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-[300px] lg:h-[400px]">
          <Image
            src={"/images/aboutTwo.jpg"}
            alt="about image"
            height={300}
            width={300}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
    <div className="h-[100px] grid place-items-center relative">
      <div className="h-[1px] w-full bg-gray-500 "></div>
      <div className="bg-[#0e0e0e] w-[50px] h-[50px] rounded-full border-[2px] border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center">
        <Image
          src={"/images/logoHead.png"}
          alt="about image"
          height={100}
          width={100}
          className=" w-[50px] h-[50px] rounded-full object-cover object-center"
        />
      </div>
    </div>
  </div>
);

export default About;
