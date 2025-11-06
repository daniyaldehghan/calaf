"use client";
import React, { useState } from "react";
const cards = [
  {
    id: 1,
    img: "/images/poster1.png",
  },
  {
    id: 2,
    img: "/images/nba.png",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/250",
  },
];
function Banner() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  return (
    <div className="items-center px-8 bg-gray-900">
      <h1 className="lg:text-2xl mb-6 flex items-center justify-center">
        جدیدترین مقالات
      </h1>
      <div className="  flex gap-6 items-center  ">
        <div className="flex flex-col items-center  ">
          <div className="relative w-full flex flex-col items-center justify-center  ">
            {/* دکمه‌ها بالا */}
            <div className="flex gap-4 mb-4 relative -bottom-18 pl-2 -left-30 lg:hidden ">
              <button
                onClick={prev}
                className="bg-gray-800 text-white px-3 py-2 rounded-xl hover:bg-gray-700 transition"
              >
                قبلی
              </button>
              <button
                onClick={next}
                className="bg-gray-800 text-white px-3 py-2 rounded-xl hover:bg-gray-700 transition"
              >
                بعدی
              </button>
            </div>
            {/* کارت */}
            <div className="max-lg:w-full h-[400px] lg:h-[750px]  bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center transition">
              <img
                src={cards[index].img}
                alt={cards[index].title}
                className="max-lg:w-full h-[400px] lg:h-[750px] lg:w-[800px] rounded-xl"
              />
              <h2 className="text-lg font-bold">{cards[index].title}</h2>
              <p className="text-gray-500 dark:text-gray-300">
                {cards[index].desc}
              </p>
            </div>
            {/* <img
            src="/images/poster1.png"
            className="max-lg:w-full h-[400px] rounded-xl "
            /> */}
            <div className="relative -top-45 lg:-top-50 px-8 p-4 bg-[#00000063] rounded-sm">
              <div className="flex  gap-4 mb-5 ">
                <span className="text-xs bg-[#6C5DD3] rounded-sm w-15 h-4 text-center opacity-80">
                  سبک پازل
                </span>
                <span className="text-xs bg-[#6C5DD3] rounded-sm w-20 h-4 text-center opacity-80">
                  بازی های فکری
                </span>
              </div>
              <h4 className="text-2xl lg:4xl font-semibold">
                بازی Hello Neighbor منتشر شد
              </h4>
              <p className="text-xs lg:text-xl mb-5 lg:w-120 ">
                سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای ماجراجویی
                – ترسناک با ساخت فوق العاده از tinyBuild برای اندروید است که
                دقایقی پیش ...
              </p>
              <button className="bg-[#6C5DD3] hover:bg-[#7668cc] transition-colors cursor-pointer text-sm rounded-2xl font-medium text-white h-10 w-25 ">
                مشاهده مقاله
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative -top-30   ">
          <div className="bg-gray-800 w-250 h-60  rounded-3xl flex gap-10 px-2  items-center  hover:bg-[#6C5DD34A] ">
            <img
              src="/images/nba.png"
              className="w-60 rounded-3xl h-[220px] "
            />
            <div className="flex flex-col gap-4  w-50 ">
              <div className="flex gap-4">
                <span className="w-20 h-8 text-center leading-9   bg-gray-700 font-medium text-[#6C5DD3] rounded-full ">
                  اخبار
                </span>
                <span className="w-20 h-8 text-center leading-9 bg-gray-700 font-medium text-[#6C5DD3] rounded-full">
                  ورزشی
                </span>
              </div>
              <p className="text-xl w-70">
                بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-[#FF754C] rounded-full"></div>
                <span className="text-[#808191]">
                  ۲۰۰ نفر این مقاله را خوانده اند.
                </span>
              </div>
              <button className="bg-[#E4E4E41A] w-30 h-10 rounded-xl text-sm font-medium">
                مشاهده مقاله
              </button>
            </div>
          </div>
          <div className="bg-gray-800 w-250 h-60  rounded-3xl flex gap-10 mt-4 px-2 pt-2 items-center  hover:bg-[#6C5DD34A] ">
            <img
              src="/images/asasins.png"
              className="w-60 rounded-3xl h-[220px] "
            />
            <div className="flex flex-col gap-4  w-50 ">
              <div className="flex gap-4">
                <span className="w-20 h-8 text-center leading-8  bg-gray-700 font-medium text-[#6C5DD3] rounded-full ">
                  اکشن
                </span>
                <span className="w-25 h-8 text-center leading-8 bg-gray-700 font-medium text-[#6C5DD3] rounded-full">
                  بازی های جدید
                </span>
              </div>
              <p className="text-xl w-70">
                نسخه جدید اساسینس کرید با عنوان (میراژ) منتشر شد.
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-[#FF754C] rounded-full"></div>
                <span className="text-[#808191]">
                  ۵۴۲ نفر این مقاله را خوانده اند.
                </span>
              </div>
              <button className="bg-[#E4E4E41A] w-30 h-10 rounded-xl text-sm font-medium">
                مشاهده مقاله
              </button>
            </div>
          </div>
          <div className="bg-gray-800 w-250 h-60  rounded-3xl flex gap-10 px-2 mt-4 items-center  hover:bg-[#6C5DD34A] ">
            <img
              src="/images/thelastof.png"
              className="w-60 rounded-3xl h-[220px] "
            />
            <div className="flex flex-col gap-4  w-50 ">
              <span className="w-20 h-8 text-center leading-8   bg-gray-700 font-medium text-[#6C5DD3] rounded-full ">
                موسیقی
              </span>
              <p className="text-xl w-70">
                موسیقی بازی The Last of Us رکورد دار بیشترین دانلود.
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-[#FF754C] rounded-full"></div>
                <span className="text-[#808191]">
                  ۳۲ نفر این مقاله را خوانده اند.
                </span>
              </div>
              <button className="bg-[#E4E4E41A] w-30 h-10 rounded-xl text-sm font-medium">
                مشاهده مقاله
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
