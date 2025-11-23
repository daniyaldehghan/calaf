import { FaXbox } from "react-icons/fa";
import { IoLogoPlaystation } from "react-icons/io";
import { SiPlaystation5 } from "react-icons/si";
import { TbDevicesPc } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { sp } from "@/src/utils/replaceNumber";
function Card({ data: { _id, title, category, location, price, published } }) {
  console.log(published);
  const icons = {
    xbox: <FaXbox />,
    ps4: <IoLogoPlaystation />,
    ps5: <SiPlaystation5 />,
    pc: <TbDevicesPc />,
  };
  return (
    <div className="max-lg:p-2 m-2 border  border-blue-500 lg:p-4 rounded-2xl">
      <div className="mb-2">{icons[category]}</div>
      <p className="text-sm lg:text-xl">{title}</p>
      <p className="flex text-xs lg:text-sm">
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span className="block text-gray-400"> {sp(price)} تومان</span>
      <Link
        className="flex items-center gap-2 text-blue-400"
        href={`/buy-reside/${_id}`}
      >
        مشاهدی آگهی
        <BiLeftArrowAlt />
      </Link>
      <span>
        {published ? (
          <p className="bg-green-500 p-1 rounded-sm w-25  mt-3 text-sm ">
            انشتار شد{" "}
          </p>
        ) : (
          <p className="bg-red-500 p-1 rounded-sm w-25 mt-3 text-sm">
            {" "}
            درحال انتشار
          </p>
        )}
      </span>
    </div>
  );
}

export default Card;
