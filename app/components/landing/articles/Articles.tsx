import { FiArrowRight, FiGrid } from "react-icons/fi";
import CarouselArticle from "./CarouselArticle";

const Articles = () => {
  return (
    <section
      className="my-10 text-white border-t-gray-500 border-t-[1px] py-[2rem]"
      id="articles"
    >
      <div className="container lg:h-[88vh] lg:grid lg:place-items-center lg:grid-cols-2">
        <div className="text-left grid gap-5 py-3 flex-1 z-10  w-full">
          <h3
            className="text-2xl  lg:text-4xl uppercase"
            style={{ fontFamily: "var(--fFTwo)" }}
          >
            <b>Our Articles</b>
          </h3>
          <p className="text-sm text-gray-300 max-w-[40ch] ">
            Stay up-to-date with the latest news and insights on airport
            transfers with Lyon Cars Airport Transfers blog. Our team of experts
            shares their knowledge and expertise to help you make the most of
            your airport transfers and travels.
          </p>
        </div>

        <div className="relative flex-1">
          <div className="w-full lg:w-[90%]">
            <CarouselArticle />
          </div>
          {/* <div className="bg-black text-white z-10 absolute right-0 top-1/2 -translate-y-1/2 p-4 px-6 grid place-items-center">
            <FiArrowRight className="text-xl" />
          </div>

          <div className="flex items-center gap-2">
            <FiGrid />
            <div className="text-sm">All Articles</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Articles;
