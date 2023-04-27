import { Carousel } from "react-responsive-carousel";
import { articlesData } from "./articlesData";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <section
      className="my-10 text-white border-t-gray-500 border-t-[1px] py-[2rem]"
      id="articles"
    >
      <div className="container lg:h-[88vh] lg:flex lg:items-center">
        <div className="text-left grid gap-5 py-3 lg:w-1/2 z-10  ">
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

        <div className="lg:w-1/2  justify-self-end ">
          <Carousel autoPlay showIndicators={false} infiniteLoop>
            {articlesData.map((article) => (
              <ArticleCard data={article} key={article.id} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Articles;
