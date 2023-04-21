"use client";

import Image from "next/image";

function CurvedText() {
  const text = "LyonCars AirportTransfer";

  return (
    <div className="relative hidden md:block">
      <svg
        viewBox="0 0 100 100"
        width="450"
        height="450"
        className="animate-spin-slow font-extrabold svg"
      >
        <defs>
          <path
            id="circle"
            d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="text-[13.5px]">
          <textPath href="#circle">{text.toUpperCase()}</textPath>
        </text>
      </svg>
      <Image
        src={"/images/logoHead.png"}
        alt="about image"
        height={100}
        width={100}
        className=" w-[150px] h-[150px] rounded-full object-cover object-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-[150px]"
      />
    </div>
  );
}

export default CurvedText;
