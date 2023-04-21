"use client";

import { MantineProvider } from "@mantine/core";
import { ReactElement } from "react";

const Global = ({ children }: any) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default Global;
