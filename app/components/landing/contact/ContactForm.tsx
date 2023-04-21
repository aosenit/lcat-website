import { Button, Input, NumberInput, TextInput, Textarea } from "@mantine/core";
import React from "react";

const ContactForm = () => {
  return (
    <form className="!text-white grid gap-5 my-5 md:flex-1 lg:h-[350px] w-full">
      <div className="flex flex-col md:flex-row justify-between gap-4 ">
        <TextInput
          placeholder="Full Name"
          name="fullName"
          label={<span className="text-white text-xs">Full Name</span>}
          size="md"
          withAsterisk
          radius="xs"
          className="flex-1"
          type="text"
        />

        <TextInput
          placeholder="ead@ead.com"
          name="email"
          label={<span className="text-white text-xs">Email</span>}
          size="md"
          withAsterisk
          radius="xs"
          className="flex-1"
          type="email"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <TextInput
          placeholder="LTK and Sons"
          name="comapny"
          label={<span className="text-white text-xs">Company</span>}
          size="md"
          withAsterisk
          radius="xs"
          className="flex-1"
          type="text"
        />

        <TextInput
          name="phoneNumber"
          type="number"
          placeholder="080333333333"
          label={<span className="text-white text-xs">Tel</span>}
          radius="xs"
          withAsterisk
          size="md"
          className="flex-1"
        />
      </div>
      <Textarea
        placeholder="I want to ask how.."
        label={<span className="text-white text-xs">Message</span>}
        radius="xs"
        withAsterisk
      />

      <Button
        radius="xs"
        size="md"
        className="border-[1px] border-white text-white font-light transition hover:bg-[var(--theme-color)] hover:text-black"
      >
        SEND MESSAGE
      </Button>
    </form>
  );
};

export default ContactForm;
