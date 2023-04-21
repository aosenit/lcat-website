"use client";
import { create } from "zustand";

const useStore = create((set) => ({
  navMenuState: false,
  setOpenNav: () => set({ navMenuState: true }),
  setCloseNav: () => set({ navMenuState: false }),
}));

export default useStore;
