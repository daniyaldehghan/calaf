"use client";
// import RadioButton from "@/module/RadioButton";
// import TextDate from "@/module/TextDate";
// import TextList from "@/module/TextList";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TextInput from "../module/TextInput";

function AddProfile({ data }) {
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    constructionDate: new Date(),
    category: "",
  });

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
      router.refresh();
    }
  };
  const SubmitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success("آگهی به صف انتشار اضافه شد.");
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col justify-centser max-lg:items-center mt-10  w-full">
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
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
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {/* <RadioButton profileData={profileData} setProfileData={setProfileData} /> */}

      {/* <TextDate profileData={profileData} setProfileData={setProfileData} /> */}
      <Toaster />
      {data ? (
        <button className="mt-6 " onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button
          className="mt-6  bg-blue-500 w-50 rounded-2xl p-2 hover:w-55 cursor-pointer hover:bg-blue-600"
          onClick={SubmitHandler}
        >
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfile;
