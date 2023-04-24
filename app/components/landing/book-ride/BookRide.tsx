"use client";
import { Radio } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import useStore from "@/app/store/useStore";

const radioOptions = [
  "STANDARD",
  "BUSINESS",
  "ECONOMY",
  "VIP",
  "MINIVAN",
  "COMFORT",
];

const carOptions = [
  { carType: radioOptions[0], src: "car-1", rate: "4500" },
  { carType: radioOptions[1], src: "car-2", rate: "5000" },
  { carType: radioOptions[2], src: "car-3", rate: "8000" },
  { carType: radioOptions[3], src: "car-4", rate: "9000" },
  { carType: radioOptions[4], src: "van-1", rate: "7000" },
  { carType: radioOptions[5], src: "car-5", rate: "10000" },
];

const BookRide = () => {
  const { rideType }: any = useStore();
  const [carOption, setCarOption] = useState<any>(carOptions[0]);

  const handleCarOption = () => {
    setCarOption(
      carOptions.find((option) => option.carType.toLowerCase() === rideType)
    );
  };

  useEffect(() => {
    handleCarOption();
  }, [rideType]);

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
        {carOption ? (
          <div className="w-full h-[350px]  md:flex-1 relative">
            <Image
              src={`/images/${carOption?.src}.jpeg`}
              loading="lazy"
              alt="about image"
              height={300}
              width={300}
              className="w-full h-full object-cover object-center"
            />
            <h3 className="text-[3rem] absolute left-0 top-0 p-3 z-20 text-[var(--theme-color)]">
              N {Number(carOption?.rate).toLocaleString()}
            </h3>
          </div>
        ) : (
          <div className="w-full h-[350px]  md:flex-1 relative">
            <Image
              src={`/images/car-6.jpeg`}
              loading="lazy"
              alt="about image"
              height={300}
              width={300}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}
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
  const [value, setValue] = useState("STANDARD");
  const { setRideType }: any = useStore();

  useEffect(() => {
    setRideType(value);
  }, [value]);

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      className="text-white p-3  grid grid-cols-2  h-full w-full  gap-5 md:grid-cols-1 "
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
