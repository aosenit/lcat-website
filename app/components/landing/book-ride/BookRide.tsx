import { Radio } from "@mantine/core";
import Image from "next/image";
import React, { useState } from "react";
import BookingForm from "./BookingForm";

const radioOptions = [
  "STANDARD",
  "BUSINESS",
  "ECONOMY",
  "VIP",
  "MINIVAN",
  "COMFORT",
];

const BookRide = () => {
  return (
    <section
      className="text-white  border-t-gray-500 border-t-[1px] py-[2rem] lg:py-[6rem] lg:min-h-[88vh]  lg:items-center lg:grid"
      id="book"
    >
      <div className="text-left grid gap-5 py-3  flex-1 container ">
        <h3
          className="text-2xl  lg:text-4xl uppercase"
          style={{ fontFamily: "var(--fFTwo)" }}
        >
          <b>BOOK A RIDE</b>
        </h3>
        <p className="text-sm text-gray-300 max-w-[40ch] ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          iure voluptate magnam fugiat vel reiciendis quisquam in qui tempora
          pariatur!
        </p>
      </div>
      <div className="container flex flex-col gap-5 md:flex-row-reverse md:flex-wrap md:items-center lg:h-[60vh] lg:justify-between">
        <div className="w-full h-[350px]  md:flex-1">
          <Image
            src={"/images/audiBooking.jpg"}
            alt="about image"
            height={100}
            width={100}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="md:flex-1 md:flex items-center md:gap-5">
          <div className="bg-gray-700 min-h-[100px] p-4 lg:h-[350px] md:w-fit ">
            <RadioGroup />
          </div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookRide;

function RadioGroup() {
  const [value, setValue] = useState("react");

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      className="text-white p-3 flex items-center h-full w-full flex-wrap gap-5 md:flex-col md:items-start md:justify-between "
    >
      {radioOptions.map((radios, index) => {
        return (
          <Radio
            value={radios.toLowerCase()}
            label={<span className="text-white">{radios}</span>}
            key={index}
            color="yellow"
          />
        );
      })}
    </Radio.Group>
  );
}
