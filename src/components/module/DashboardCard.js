"use client";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
// import Card from "./Card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Card from "./CardPage";

function DashboardCard({ data }) {
  console.log(data.published);
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profile/${data._id}`);
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className="bg-resdd-100 border  border-blue-500 lg:flex  lg:w-250  m-[0px_2px_10px_2px] rounded-xl md:w-150">
      {/* <h1 className="text-white">asdadad</h1> */}
      <Card data={data} />
      <div className="flex justify-between mb-2 p-2   lg:gap-6 lg:items-end lg:text-center ">
        <button
          onClick={editHandler}
          className="bg-green-500 p-1 text-xs flex items-center rounded-sm lg:w-80 lg:text-xl justify-center cursor-pointer"
        >
          ویرایش
          <FiEdit />
        </button>
        <button
          className="bg-red-500 p-1 text-xs flex items-center rounded-sm lg:w-80 lg:text-xl  justify-center cursor-pointer"
          onClick={deleteHandler}
        >
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
