import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      className="my-10 text-white border-t-gray-500 border-t-[1px] "
      id="contact"
    >
      <div className="container md:h-[80vh] md:grid md:place-items-center md:grid-cols-2">
        <div className="w-full py-3 flex-1">
          <div className="text-left grid gap-5  z-10 ">
            <h3
              className="text-2xl  lg:text-4xl uppercase"
              style={{ fontFamily: "var(--fFTwo)" }}
            >
              <b>Contact</b>
            </h3>
            <p className="text-sm text-gray-300 max-w-[40ch] ">
              You want to reach out to Us?
            </p>
          </div>
          <div className="">
            <span className="text-gray-300 text-xs">Give us a call</span>
            <div className=" text-lg flex items-center gap-5">
              <span>
                +234 {""} 802 {""} 853 {""} 5661
              </span>
              <a
                href="#"
                className="h-16 w-16 bg-[var(--theme-color)]  grid place-items-center rounded-full transition hover:opacity-[.5]"
              >
                <FiPhoneCall
                  size={"20px"}
                  className="text-black animate-pulse"
                />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
