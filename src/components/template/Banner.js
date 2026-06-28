"use client";
import React, { useState } from "react";
const cards = [
  {
    id: 1,
    img: "/images/poster1.png",
    name: " بازی Hello Neighbor منتشر شد",
    title:
      "   سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای ماجراجویی – ترسناک با ساخت فوق العاده از tinyBuild برای اندروید است که دقایقی پیش ...",
    sabk: "پازل",
    category: "فکری",
  },
  {
    id: 2,
    img: "/images/nba.png",
    name: "بازی NBA منتشر شد ",
    title:
      "  ان‌بی‌ای، لیگ حرفه‌ای بسکتبال در آمریکای شمالی است که از ۳۰ تیم تشکیل شده (۲۹ تیم در ایالات متحده آمریکا و ۱ تیم در کانادا). ان‌بی‌ای یکی از لیگ‌های بزرگ ورزش حرفه‌ای در ایالات متحده و کانادا است و به عنوان برترین لیگ بسکتبال حرفه‌ای در جهان شناخته می‌شود.[۱] دفتر مرکزی لیگ در میدتاون منهتن مستقر است..",
    sabk: "ورزشی",
    category: "تحرکی",
  },

  {
    id: 3,
    img: "/images/0.jpg",
    name: "Metal Gear Solid Delta: Snake Eater منتشر شد ",
    title:
      "   Metal Gear Solid Delta: Snake Eater از خاص ترین، زیباترین و محبوب ترین بازیهای ماجراجویی – ترسناک با ساخت فوق العاده از tinyBuild  است که دقایقی پیش ...",
    sabk: "اکشن",
    category: "جنگی",
  },
];
function Banner() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  return (
    <div className="container m-auto items-center px-6 bg-grays-900">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="lg:text-2xl dark:text-black lg:mb-2 flex items-center justify-center  ">
          جدیدترین مقالات
        </h1>
        <div className="border-b dark:text-gray-900 border-gray-500 lg:mb-9 w-35 "></div>
      </div>
      <div className="  flex gap-6 items-center  ">
        <div className="flex flex-col items-center  ">
          <div className="relative w-full flex flex-col max-lg:mt-5 items-center justify-center  ">
            {/* دکمه‌ها بالا */}
            <div className="flex gap-4 mb-4  -bottom-18 pl-2  lg:hidden  ">
              <button
                onClick={prev}
                className="bg-gray-800 text-white px-3 py-2 rounded-xl hover:bg-gray-700 transition"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="bg-gray-800 text-white px-3 py-2 rounded-xl hover:bg-gray-700 transition"
              >
                ›
              </button>
            </div>
            {/* کارت */}
            <div className="max-lg:w-full h-[400px] lg:h-[750px]   bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center transition">
              <img
                src={cards[index].img}
                alt={cards[index].title}
                className="max-lg:w-full   h-[400px] lg:h-[750px]  lg:w-[800px] rounded-xl"
              />
              {/* <h2 className="text-lg font-bold">{cards[index].title}</h2> */}
              <p className="text-gray-500 dark:text-gray-300">
                {cards[index].desc}
              </p>
            </div>
            {/* <img
            src="/images/poster1.png"
            className="max-lg:w-full h-[400px] rounded-xl "
            /> */}
            <div className="relative -top-50  w-full  lg:px-8 p-4 bg-[#00000063] rounded-sm">
              <div className="flex  gap-4 mb-5 ">
                <span className="text-xs bg-[#6C5DD3] rounded-sm w-15 h-4 text-center opacity-80">
                  {cards[index].sabk}
                </span>
                <span className="text-xs bg-[#6C5DD3] flex gap-1 justify-center rounded-sm w-20 h-4 text-center opacity-80">
                  <p>بازی های</p>
                  {cards[index].category}
                </span>
              </div>
              <h4 className="text-xl lg:4xl font-semibold">
                {/* بازی Hello Neighbor منتشر شد */}
                {cards[index].name}
              </h4>
              <p className="text-xs lg:text-xl mb-10 lg:mb-1 ">
                {/* سلام همسsایه از خاص ترین، زیباترین و محبوب ترین بازیهای ماجراجویی
                – ترسناک با ساخت فوق العاده از tinyBuild برای اندروید است که
                دقایقی پیش ... */}
                {cards[index].title}
              </p>
              <button className=" bg-[#6C5DD3] hover:bg-[#7668cc] transition-colors cursor-pointer text-sm rounded-2xl font-medium text-white h-10 w-25 ">
                مشاهده مقاله
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col relative md:-top-25 grow-7   ">
          <div className="bg-gray-800 dark:bg-gray-300 lg:w-170  grow-s3 md:w-20   grow-[2px] h-60  rounded-3xl flex gap-10 px-2  items-center  hover:bg-[#6C5DD34A] ">
            <img
              src="/images/nba.png"
              className="w-60 rounded-3xl h-[220px] "
            />
            <div className="flex flex-col gap-4   w-50 ">
              <div className="flex gap-4  lg:text-xl">
                <span className="w-20 h-8 dark:bg-black dark:text-white text-center leading-9   bg-gray-700 font-medium text-[#6C5DD3] rounded-full ">
                  اخبار
                </span>
                <span className="w-20 h-8 dark:bg-black dark:text-white text-center leading-9 bg-gray-700 font-medium text-[#6C5DD3] rounded-full">
                  ورزشی
                </span>
              </div>
              <p className="text-xl w-70 dark:text-black">
                بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-[#FF754C] dark:bg-pink-500 rounded-full"></div>
                <span className="text-[#808191]  dark:text-gray-700">
                  ۲۰۰ نفر این مقاله را خوانده اند.
                </span>
              </div>
              <button className="bg-[#E4E4E41A] dark:bg-gray-100 dark:text-black w-30 h-10 rounded-xl text-sm font-medium">
                مشاهده مقاله
              </button>
            </div>
          </div>
          <div className="bg-gray-800 dark:bg-gray-300 w-170 h-60  rounded-3xl flex gap-10 mt-4 px-2 pt-2 items-center  hover:bg-[#6C5DD34A] ">
            <img
              src="/images/asasins.png"
              className="w-60 rounded-3xl h-[220px] "
            />
            <div className="flex flex-col gap-4   w-50  ">
              <div className="flex gap-4 ">
                <span className="w-20 h-8 dark:bg-black dark:text-white text-center leading-8  bg-gray-700 font-medium text-[#6C5DD3] rounded-full ">
                  اکشن
                </span>
                <span className="w-25 dark:bg-black dark:text-white h-8 text-center leading-8 bg-gray-700 font-medium text-[#6C5DD3] rounded-full">
                  بازی های جدید
                </span>
              </div>
              <p className="text-xl w-70 dark:text-black">
                نسخه جدید اساسینس کرید با عنوان (میراژ) منتشر شد.
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-[#FF754C] dark:bg-pink-500 rounded-full"></div>
                <span className="text-[#808191] dark:text-gray-700">
                  ۵۴۲ نفر این مقاله را خوانده اند.
                </span>
              </div>
              <button className="bg-[#E4E4E41A] dark:bg-gray-100 dark:text-black w-30 h-10 rounded-xl text-sm font-medium">
                مشاهده مقاله
              </button>
            </div>
          </div>
          <div className="bg-gray-800 dark:bg-gray-300 w-170 h-60  rounded-3xl flex gap-10 px-2 mt-4 items-center  hover:bg-[#6C5DD34A] ">
            <img
              src="/images/thelastof.png"
              className="w-60 rounded-3xl h-[220px] "
            />
            <div className="flex flex-col gap-4  w-50 ">
              <span className="w-20 h-8 dark:bg-black dark:text-white text-center leading-8   bg-gray-700 font-medium text-[#6C5DD3] rounded-full ">
                موسیقی
              </span>
              <p className="text-xl w-70 dark:text-black">
                موسیقی بازی The Last of Us رکورد دار بیشترین دانلود.
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-[#FF754C] dark:bg-pink-500 rounded-full"></div>
                <span className="text-[#808191] dark:text-gray-700">
                  ۳۲ نفر این مقاله را خوانده اند.
                </span>
              </div>
              <button className="bg-[#E4E4E41A] dark:bg-gray-100 dark:text-black w-30 h-10 rounded-xl text-sm font-medium">
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
