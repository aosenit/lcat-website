import React from "react";
import { FiArrowRight } from "react-icons/fi";
import CarouselPercentWith from "./CarouselPercentWidth";

const Services = () => {
  return (
    <div className="" id="services">
      <div className="container py-5  text-white md:flex  gap-4  justify-between items-center lg:min-h-[80vh]  lg:items-center">
        <div className="text-left grid gap-5 py-3 flex-1">
          <h3
            className="text-2xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>OUR SERVICES</b>
          </h3>
          <p className="text-sm text-gray-300 max-w-[40ch] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            iure voluptate magnam fugiat vel reiciendis quisquam in qui tempora
            pariatur!
          </p>
          <a
            href=""
            className="h-fit flex justify-center gap-2 items-center text-sm hover:primary-text transition text-gray-300 border-[1px] border-gray-300 w-fit px-10 py-3 hover:bg-white hover:text-black"
          >
            <span> Learn More</span> <FiArrowRight className="text-[20px]" />
          </a>
        </div>
        <div className="flex-1">
          <CarouselPercentWith />
        </div>
      </div>
    </div>
  );
};

export default Services;
