"use client";
import { Carousel } from "@mantine/carousel";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ArticleCard from "./ArticleCard";
import { IArticleData, articlesData } from "./articlesData";

function CarouselArticle() {
  return (
    <Carousel
      //   maw={320}
      mx="auto"
      // withIndicators
      className="border-[1px] border-gray-600 mt-5 w-full h-fit"
      nextControlIcon={
        <FiArrowRight className="text-black z-10 cursor-pointer font-extrabold" />
      }
      previousControlIcon={
        <FiArrowLeft className="text-black z-10 cursor-pointer font-extrabold" />
      }
    >
      {articlesData.map((data: IArticleData, index: number) => {
        return (
          <Carousel.Slide
            className=" w-full grid place-items-center "
            key={data.id}
          >
            <div className=" h-[100%] w-full">
              <ArticleCard data={data} />
            </div>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}

export default CarouselArticle;
