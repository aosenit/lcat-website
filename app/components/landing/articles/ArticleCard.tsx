import Image from "next/image";
import { IArticleData } from "./articlesData";

export interface IPropData {
  data: IArticleData;
}

export default function ArticleCard({ data }: IPropData) {
  return (
    <div className="w-full h-[500px] bg-white flex flex-col gap-2 p-6 items-start text-left">
      <div className="flex-1 w-full h-[45%] flex justify-start  lg:h-[60%]">
        <Image
          src={"/images/aboutOne.jpg"}
          alt="article image"
          width="300"
          height="300"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 p-2  text-black ">
        <h5 className="text-xl font-bold max-w-[30ch]">{data?.title}</h5>
        <p className="text-[10px] text-gray-700 max-w-[52ch]">{data.content}</p>
        <div className="px-10 py-2 bg-black text-white text-xs w-fit rounded-3xl grid place-items-center">
          {data.date}
        </div>
      </div>
    </div>
  );
}
