"use client";
import { Carousel } from "@mantine/carousel";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const srcs = [
  "https://images.unsplash.com/photo-1556122071-e404eaedb77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGF4aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1661510762076-14dea04bdff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRheGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519566657253-e37fbcf36dfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGF4aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1613638377394-281765460baa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGF4aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

function CarouselPercentWith() {
  return (
    <Carousel
      //   maw={320}
      mx="auto"
      withIndicators
      height={350}
      className="border-[1px] border-gray-600 mt-5 w-full"
      nextControlIcon={
        <FiArrowRight className="text-white z-10 cursor-pointer font-extrabold" />
      }
      previousControlIcon={
        <FiArrowLeft className="text-white z-10 cursor-pointer font-extrabold" />
      }
    >
      {srcs.map((src, index) => {
        return (
          <Carousel.Slide
            className=" w-full grid place-items-center "
            key={index}
          >
            <div className=" h-[100%] w-full">
              <img
                className="w-full h-full object-cover object-top"
                src={src}
                alt="about image"
              />
            </div>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}

export default CarouselPercentWith;
