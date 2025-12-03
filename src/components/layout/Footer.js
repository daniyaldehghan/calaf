"use client";

import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Footer() {
  const [email, setEmail] = useState("");
  const emailHandler = async () => {
    const res = await fetch("/api/join", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.error) {
      toast.error("لطفا اطلاعات معتبر وارد کنید");
    } else {
      toast.success(data.success);
    }
  };
  return (
    <footer>
      <div className=" dark:bg-white  grid grid-cols-1  px-6 py-14 m-auto md:grid-cols-4 lg:grid-cols-4   gap-6  ">
        <div className="w-full h-25 lg:order-4 lg:col-span-1 flex justify-end flex-col">
          <p className="font-medium dark:text-black">عضویت در خبرنامه</p>
          <div className="bg-[#FFFFFF] flex justify-between rounded-[7px] p-2 mt-2 lg:w-90 dark:bg-black">
            <input
              type="email"
              value={email}
              required
              placeholder="ایمیل خود را وارد کنید"
              className="placeholder:text-[#2222224A] text-black text-sm font-medium focus:outline-0 flex-1 px-2 dark:text-white dark:placeholder:text-white "
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={emailHandler}
              className="w-[85px] h-[33px] bg-[#6C5DD3] rounded-xl lg:leading-1 lg:p-4 text-primary font-semibold"
            >
              عضویت
            </button>
          </div>
        </div>
        <div className="w-full lg:order-3 lg:col-span-1  lg:px-4 grid grid-cols-1 lg:grid-cols-4 gap-6 peer-[]:">
          <div className="mb-6 grid grid-cols-7  items-center ">
            <input type="checkbox" id="a1" className="hidden peer" />
            <label
              htmlFor="a1"
              className="col-span-5 dark:text-black cursor-pointer w-full lg:w-100"
            >
              پربازدیدترین صفحات
            </label>
            <div className="w-full mb-5  lg:w-200 h-10 col-span-8 hidden lg:block max-lg:peer-checked:block">
              <ul className="text-xs  flex flex-col max-lg:bg-gray-700 max-lg:rounded-lg max-lg:*:px-4 *py-2 max-lg:divide-y divide-gray-100 max:lg-mt-2 p-1">
                <Link href="#" className="mb-2 ">
                  جدیدترین بازی ها
                </Link>
                <Link href="/store" className="mb-2 ">
                  فروشگاه
                </Link>
                <Link href="#" className="mb-2 ">
                  مقالات
                </Link>
                <Link href="/about" className="mb-2 ">
                  تماس با ما
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-20 lg:order-3 px-4 max-lg:mt-12  ">
          <img src="/images/enamad.webp" alt="" className="w-16" />
        </div>
      </div>
      <div className="w-full  flex justify-between px-4 py-3 lg:py-11  bg-[#FF754C] gap-3">
        <p className="text-xs lg:text-xl">
          کپی بخش یا کل هر کدام از مطالب تنها با کسب مجوز مکتوب امکان پذیر است.
        </p>
        <div className="flex  gap-6">
          <div>
            <img src="/svg/whatsapp.svg" className="w-4 h-4  lg:w-8  lg:h-5" />
          </div>
          <div>
            <img src="/svg/instagram.svg" className="w-4 h-4  lg:w-8  lg:h-5" />
          </div>
          <div>
            <img src="/svg/x.svg" className="w-4 h-4 lg:w-8   lg:h-5" />
          </div>
        </div>
      </div>
      <Toaster />
    </footer>
  );
}

export default Footer;
