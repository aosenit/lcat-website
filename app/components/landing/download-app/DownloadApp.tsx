import Image from "next/image";
import React from "react";
import { FiPlay } from "react-icons/fi";
import { BsApple } from "react-icons/bs";
const DownloadApp = () => {
  return (
    <section className=" text-white border-t-gray-500 border-t-[1px] ">
      <div className="container my-5  md:h-[80vh] md:flex md:justify-between md:gap-10 md:items-center">
        <div className="w-full h-[250px]  md:flex-1">
          <Image
            src={"/images/mobile-app.png"}
            alt="about image"
            height={100}
            width={100}
            className="w-full h-full object-cover object-center max-w-[200px md:h-[300px]"
          />
        </div>
        <div className="my-5  md:flex-1">
          <div className="text-left grid gap-5 py-3 flex-1  ">
            <h3
              className="text-2xl  lg:text-4xl uppercase"
              style={{ fontFamily: "var(--fFTwo)" }}
            >
              <b>Download our app</b>
            </h3>
            <p className="text-sm text-gray-300 max-w-[40ch] ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
              iure voluptate magnam fugiat vel reiciendis quisquam in qui
              tempora pariatur!
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="cursor-pointer bg-[var(--theme-color)] rounded-[4rem] w-fit text-black transition hover:bg-white">
                <div className="px-20 py-3 flex items-center gap-2">
                  <FiPlay className="text-3xl" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs">Download From</span>
                    <span className="">
                      <b>Google Play</b>
                    </span>
                  </div>
                </div>
              </div>

              <div className="cursor-pointer bg-[var(--theme-color)] rounded-[4rem] w-fit text-black transition hover:bg-white">
                <div className="px-20 py-3 flex items-center gap-2">
                  <BsApple className="text-3xl" />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs">Download From</span>
                    <span className="">
                      <b>Apple Store</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;