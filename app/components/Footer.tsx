import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const siteMapData = ["Home", "About", "Services", "Contact"];

const Footer = () => {
  return (
    <footer className="text-white border-t-gray-500 border-t-[1px] py-[1rem]">
      <div className="container md:flex md:justify-center md:items-center md:h-[40vh] md:w-full">
        <div className="my-8 flex-1 w-full">
          <h3
            className="text-xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Site Map</b>
          </h3>
          <div className="grid gap-2 my-3">
            <ul>
              {siteMapData.map((s, i) => (
                <li>
                  <a
                    href="#"
                    key={i}
                    className="text-sm transition hover:text-[var(--theme-color)]"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>{" "}
        <div className="text-left grid gap-5 py-3 flex-1 z-10 md:justify-self-end">
          <h3
            className="text-xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Lyon Cars</b>
          </h3>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-8 h-8 grid rounded-full place-items-center border-[2px] border-white"
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              className="w-8 h-8 grid rounded-full place-items-center border-[2px] border-white"
            >
              <FiTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 grid rounded-full place-items-center border-[2px] border-white"
            >
              <FiInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 grid rounded-full place-items-center border-[2px] border-white"
            >
              <FiLinkedin />
            </a>
          </div>
          <p className="text-sm text-gray-500 max-w-[40ch] ">
            Lyon Cars Airport Transfers undertake daily road trips for our
            numerous customers. Our drivers pick up travellers from Airports in
            London to their destinations as well as take them to the Airports.
          </p>
        </div>
        <div className="my-8 flex-1 w-full">
          <h3
            className="text-xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Working Hours</b>
          </h3>
          <div className="grid gap-2 my-3">
            <div className="flex items-center gap-2 text-sm text-gray-500 max-w-[40ch]">
              <span>Monday - Sunday :</span>
              <span>24/7</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-7 grid gap-3  container md:flex md:justify-between">
        <h6 className="text-gay-600 text-xs">
          Copyright © 2023 Lyon Cars Airport Transfer
        </h6>
        <h6 className="text-gay-600 text-xs">
          Designed by{" "}
          <a href="#" className="text-[var(--theme-color)]">
            TrazDev
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
