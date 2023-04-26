import React from "react";
import { FiArrowRight } from "react-icons/fi";
import CarouselPercentWith from "./CarouselPercentWidth";
import { Card } from "@mantine/core";

const Services = () => {
  return (
    <div className="" id="services">
      <div className="grid container py-5  text-white lg:flex  gap-4  justify-between items-center lg:min-h-[88vh]  lg:items-center">
        <div className="text-left grid gap-5 py-3 flex-1">
          <h3
            className="text-2xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>OUR SERVICES</b>
          </h3>
          <p className="text-sm text-gray-300 max-w-[40ch] ">
            We've Got You Covered from Airport to Destination. At Lyon Cars
            Airport Transfers, we offer a range of airport shuttle services to
            ensure that you arrive at your destination on time and in style.
          </p>
          <a
            href="#contact"
            className="flex justify-center gap-2 items-center text-sm hover:primary-text transition text-gray-300 border-[1px] border-gray-300 w-fit px-10 py-3 hover:bg-white hover:text-black"
          >
            <span> CONTACT</span> <FiArrowRight className="text-[20px]" />
          </a>
        </div>
        <div className="flex-1">
          <div className="w-full h-fit ">
            <>
              <video controls className="w-full h-fit">
                <source src="/images/services.mp4" />
              </video>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
