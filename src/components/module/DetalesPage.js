import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";

import Title from "./Title";
import { e2p, sp } from "@/src/utils/replaceNumber";
import { categories } from "@/src/app/constants/string";
import { icons } from "@/src/app/constants/icons";
function DetalesPage({
  data: {
    title,
    location,
    description,
    phone,
    price,
    category,
    constructionDate,
    name,
    story,
  },
}) {
  return (
    <div className="container m-auto px-8 flex justify-between py-8 w-full h-full max-lg:gap-5  ">
      <div className="bg-[#5e565675] p-2 rounded-2xl lg:w-200  ">
        <h1 className="text-xl mb-2 font-semibold text-[#D4AF37]">{title}</h1>
        <span className="flex mb-2">
          <HiOutlineLocationMarker />
          مکان:
          {location}
        </span>
        <p className="mb-2">وضعیت:{story}</p>
        <Title>توضیحات:</Title>
        <p className="text-sm font-medium mt-2 ">{description}</p>
      </div>
      <div className="bg-gray-700 p-4 rounded-2xl lg:w-150 max-lg:h-65  w-40">
        <div className=" flex flex-col justify-center items-center ">
          <IoGameController className="text-[#9250f0] text-xl mb-2 lg:text-4xl" />
          <p className="text-[#00B4D8] lg:text-3xl text-sm font-semibold">
            {name}
          </p>
          <span className="flex mb-5 justify-center items-center lg:text-2xl ">
            <AiOutlinePhone className="text-green-500" />
            <p className="">{e2p(phone)}</p>
          </span>
        </div>
        <div className=" flex flex-col justify-center items-center">
          {/* <ShareButton /> */}
          <p>اشتراک</p>
          <p className="flex gap-2 justify-center items-center mb-2 lg:text-2xl text-xs mt-2">
            {icons[category]}
            {categories[category]}
          </p>
          <p className="text-xs mb-2 lg:text-2xl">{sp(price)} تومان</p>
          <p className="flex mt-2 lg:text-xl gap-1">
            <BiCalendarCheck className="text-blue-400" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetalesPage;
