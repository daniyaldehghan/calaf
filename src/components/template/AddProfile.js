"use client";
// import RadioButton from "@/module/RadioButton";
// import TextDate from "@/module/TextDate";
// import TextList from "@/module/TextList";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TextInput from "../module/TextInput";
import RadioButton from "../module/RadioButton";
import TextDate from "../module/TextDate";
import Workradio from "../module/Workradio";

function AddProfile({ data }) {
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    title: "",
    name: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    constructionDate: new Date(),
    category: "",
    story: "",
  });
  console.log(profileData);
  useEffect(() => {
    if (data) setProfileData(data);
  }, []);
  const editHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.push("/dashboard/my-profile");
    }
  };
  const SubmitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success("آگهی به صف انتشار اضافه شد.");
      router.refresh();
      console.log(profileData);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center max-lg:items-center m-auto lg:pxs-12 lg:pys-10 px-4 w-full">
      <h3 className="lg:text-2xl dark:text-black">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h3>
      <TextInput
        type="text"
        title="نام و نام خانوادگی"
        name="name"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        type="text"
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <Workradio profileData={profileData} setProfileData={setProfileData} />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تلفن"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <RadioButton profileData={profileData} setProfileData={setProfileData} />

      <TextDate profileData={profileData} setProfileData={setProfileData} />
      <Toaster />
      {data ? (
        <button
          className="mt-6 lg:w-150 lg:mr-20  bg-blue-500 w-50 rounded-2xl p-2   cursor-pointer hover:bg-blue-600 "
          onClick={editHandler}
        >
          ویرایش آگهی
        </button>
      ) : (
        <button
          className="mt-6 lg:w-150 lg:mr-20  bg-blue-500 w-50 rounded-2xl p-2   cursor-pointer hover:bg-blue-600"
          onClick={SubmitHandler}
        >
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfile;
