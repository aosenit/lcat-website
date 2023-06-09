import React from "react";
import AccordionFaq from "./Accordion";
import Image from "next/image";

const Faq = () => {
  return (
    <section className="relative text-white border-t-gray-500 border-t-[1px] py-[2rem]">
      <div className="container md:h-[80vh] md:grid md:place-items-center md:grid-cols-2">
        <div className="text-left grid gap-5  flex-1 z-10">
          <h3
            className="text-2xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Frequently Asked Questions</b>
          </h3>
          <p className="text-sm text-gray-300 max-w-[40ch] ">
            At Lyon Cars Airport Transfers, we believe in transparency and open
            communication with our customers. That's why we've compiled a list
            of frequently asked questions to help you understand our services
            and make informed decisions about your airport transfers. If you
            have any other questions, please don't hesitate to contact us
          </p>
        </div>

        <div className="z-10 md:w-full md:place-self-center ">
          <AccordionFaq />
        </div>
        {/* <div className="z-[-1] w-full h-[150px] lg:h-[400px] absolute -left-1/2 top-3/4 -translate-y-1/2">
          <Image
            src={"/images/faq.gif"}
            alt="about image"
            height={100}
            width={100}
            className="w-full h-full object-cover object-center"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Faq;
