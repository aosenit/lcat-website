import { Button, NumberInput, TextInput } from "@mantine/core";
import React from "react";

const BookingForm = () => {
  return (
    <form className="!text-white grid gap-5 md:gap-2 my-5 md:flex-1 lg:h-[350px] max-w-[500px]">
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <TextInput
          placeholder="e.g John"
          name="firstName"
          label={<span className="text-white">First Name</span>}
          size="md"
          withAsterisk
          radius="xs"
          className="flex-1"
        />

        <TextInput
          placeholder="e.g Doe"
          name="LastName"
          label={<span className="text-white">Last Name</span>}
          size="md"
          withAsterisk
          radius="xs"
          className="flex-1"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <TextInput
          name="phoneNumber"
          placeholder="e.g 080333333333"
          label={<span className="text-white">Phone Number</span>}
          radius="xs"
          withAsterisk
          size="md"
          className="flex-1"
          type="number"
        />

        <TextInput
          name="bookingNumber"
          placeholder="e.g 1236"
          label={<span className="text-white">Booking Number</span>}
          radius="xs"
          withAsterisk
          size="md"
          className="flex-1"
          type="number"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <TextInput
          placeholder="e.g Muritala Mohammed Airport"
          name="pickup"
          label={<span className="text-white">Pick Up</span>}
          size="md"
          withAsterisk
          radius="xs"
          className="flex-1"
        />

        <TextInput
          placeholder="e.g 320, Lekki Phase 1"
          name="dropoff"
          label={<span className="text-white">Drop off</span>}
          size="md"
          withAsterisk
          radius="xs"
          className="flex-1"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <TextInput
          name="date"
          label={<span className="text-white">Date</span>}
          radius="xs"
          withAsterisk
          size="md"
          className="flex-1"
          type="date"
        />

        <TextInput
          name="time"
          label={<span className="text-white">Time</span>}
          radius="xs"
          withAsterisk
          size="md"
          className="flex-1"
          type="time"
        />
      </div>

      <Button
        radius="xs"
        size="md"
        className="border-[1px] border-white text-white font-light transition hover:bg-[var(--theme-color)] hover:text-black"
      >
        BOOK A RIDE NOW
      </Button>
    </form>
  );
};

export default BookingForm;
