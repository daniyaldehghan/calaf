import { FiCircle } from "react-icons/fi";
import CardHome from "../module/CardHome";
import Typer from "../module/TypeAnimation";

function CategoryCard() {
  const servises = ["pc", "xbox", "ps5", "ps4"];

  return (
    <div className="container lg:py-4  m-auto  relative lg:-top-28 px-4 lg:mb-5 mb-8">
      <Typer words={"از دسته بندی آگهی هارو مشاهدی کنید!"} />
      <ul className="flex mb-10  justify-around   lg:justify-center lg:gap-15 lg:text-2xl ">
        {servises.map((i) => (
          <li
            key={i}
            className="bg-[#1ABC9C] dark:text-black  lg:h-8 flex max-lg:p-2 w-12   lg:w-20 justify-center items-center  rounded-xl"
          >
            {/* <FiCircle className=" " /> */}
            <span className=" leading-5 text-center">{i}</span>
          </li>
        ))}
      </ul>
      <div className="flex lg:gap-5  text-center p-2 gap-2 ">
        <CardHome name="ps4" title="آگهی بازی های  پی اس فور" />
        <CardHome name="ps5" title="آگهی بازی های  پی اس فایو" />
        <CardHome name="pc" title="آگهی بازی های  کامپیوتر " />
        <CardHome name="xbox" title="آگهی بازی های ایکس باکس " />
      </div>
    </div>
  );
}

export default CategoryCard;
