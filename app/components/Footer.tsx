import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const siteMapData = ["Home", "About", "Services", "Contact"];

const Footer = () => {
  return (
    <footer className="text-white border-t-gray-500 border-t-[1px] py-[1rem]">
      <div className="container grid gap-4 lg:grid-cols-3  lg:w-full my-3 items-start py-3">
        <div className=" w-full">
          <h3
            className="text-xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Site Map</b>
          </h3>
          <div className="grid gap-3 ">
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
        <div className="text-left grid gap-3  z-10 ">
          <h3
            className="text-xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Lyon Cars</b>
          </h3>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-7 h-7 grid rounded-full place-items-center border-[2px] border-white hover:text-[var(--theme-color)] hover:border-[var(--theme-color)]"
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              className="w-7 h-7 grid rounded-full place-items-center border-[2px] border-white hover:text-[var(--theme-color)] hover:border-[var(--theme-color)]"
            >
              <FiTwitter />
            </a>
            <a
              href="#"
              className="w-7 h-7 grid rounded-full place-items-center border-[2px] border-white hover:text-[var(--theme-color)] hover:border-[var(--theme-color)]"
            >
              <FiInstagram />
            </a>
            <a
              href="#"
              className="w-7 h-7 grid rounded-full place-items-center border-[2px] border-white hover:text-[var(--theme-color)] hover:border-[var(--theme-color)]"
            >
              <FiLinkedin />
            </a>
          </div>
          <p className="text-sm text-gray-500 max-w-[40ch] ">
            At Lyon Cars Airport Transfers, we are committed to providing you
            with safe and reliable airport transfers to and from local and
            international airports. Our team of experienced drivers and staff
            are dedicated to ensuring that you have a comfortable and
            hassle-free travel experience. Contact us today to book your airport
            shuttle.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <h3
            className="text-xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Working Hours</b>
          </h3>
          <div className="grid gap-3">
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
          <a
            href="mailto:creativitytraz22@gmail.com"
            className="text-[var(--theme-color)]"
          >
            TrazDev
          </a>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
