"use client";
import { create } from "zustand";

const useStore = create((set) => ({
  navMenuState: false,
  setOpenNav: () => set({ navMenuState: true }),
  setCloseNav: () => set({ navMenuState: false }),

  //ride state
  rideType: "standard",
  setRideType: (newValue: string) => set({ rideType: newValue }),
}));

export default useStore;
