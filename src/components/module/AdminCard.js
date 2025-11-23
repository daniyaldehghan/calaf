"use client";
import { sp } from "@/src/utils/replaceNumber";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();
  const publishedHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/admin/delete/${_id}`, { method: "DELETE" });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className="m-3  p-2 border-b border border-blue-500 rounded-2xl ">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="">
        <span className="block">{location}</span>
        <span>{sp(price)} تومان</span>
      </div>
      <div className="flex gap-2 p-2  ">
        <button
          className="bg-green-500 p-1 rounded-sm cursor-pointer text-sm w-15 font-medium"
          onClick={publishedHandler}
        >
          انتشار
        </button>
        <button
          onClick={deleteHandler}
          className="bg-red-500 p-1 cursor-pointer rounded-sm w-25"
        >
          عدم انتشار
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default AdminCard;
