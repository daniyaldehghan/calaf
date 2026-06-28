import { FaXbox } from "react-icons/fa";
import { IoLogoPlaystation } from "react-icons/io";
import { SiPlaystation5 } from "react-icons/si";
import { TbDevicesPc } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { sp } from "@/src/utils/replaceNumber";
function Card({
  data: { _id, title, category, location, price, published, phone },
}) {
  const icons = {
    xbox: <FaXbox />,
    ps4: <IoLogoPlaystation />,
    ps5: <SiPlaystation5 />,
    pc: <TbDevicesPc />,
  };
  return (
    <div className="max-lg:p-2 m-2 border lg:w-80  border-blue-500 lg:p-4 rounded-2xl">
      <div className="mb-2 dark:text-black">{icons[category]}</div>
      <p className="text-sm lg:text-xl dark:text-black ">{title}</p>
      <p className="flex text-xs lg:text-sm dark:text-black">
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span className="flex gap-1 text-sm text-center dark:text-black">
        <p className="text-xs lg:text-sm dark:text-black"> تماس: </p>
        {phone}
      </span>
      <span className="block text-gray-400 dark:text-gray-700">
        {" "}
        {sp(price)} تومان
      </span>
      <Link
        className="flex items-center gap-2 text-blue-400"
        href={`/sellgame/${_id}`}
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
            درانتظار انتشار
          </p>
        )}
      </span>
    </div>
  );
}

export default Card;
