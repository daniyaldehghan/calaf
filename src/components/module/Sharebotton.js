"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { LuShare2 } from "react-icons/lu";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  const copyHandler = () => {
    navigator.clipboard.writeText(url);
    toast.success("لینک آگهی با موفقیت کپی شد");
  };
  return (
    <div className="flex text-red-200 gap-2">
      <LuShare2 />
      <button onClick={copyHandler}>اشتراک گذاری</button>
      <Toaster />
    </div>
  );
}

export default ShareButton;
