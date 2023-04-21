import React from "react";
import ArticleCard from "./ArticleCard";
import { FiArrowRight, FiGrid, FiMoreVertical } from "react-icons/fi";

const Articles = () => {
  return (
    <section
      className="my-10 text-white border-t-gray-500 border-t-[1px]"
      id="articles"
    >
      <div className="container md:h-[80vh] md:grid md:place-items-center md:grid-cols-2">
        <div className="text-left grid gap-5 py-3 flex-1 z-10  w-full">
          <h3
            className="text-2xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Our Articles</b>
          </h3>
          <p className="text-sm text-gray-300 max-w-[40ch] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
          </p>
        </div>

        <div className="relative flex-1">
          <ArticleCard />
          <div className="bg-black text-white z-10 absolute right-0 top-1/2 -translate-y-1/2 p-4 px-6 grid place-items-center">
            <FiArrowRight className="text-xl" />
          </div>

          <div className="flex items-center gap-2">
            <FiGrid />
            <div className="text-sm">All Articles</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
