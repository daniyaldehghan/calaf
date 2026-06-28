import Link from "next/link";
import React from "react";

function CardSlide() {
  return (
    <div className="container px-6 m-auto" id="newgame">
      <p className="text-sm lg:text-2xl  mb-8">جدید ترین بازی ها</p>
      <div className="container lg:mb-40 mb-20   mt-10 overflow-y-hidden no-sscrollbar pr-6 my-6 md:container md:m-auto">
        <div className="flex gap-6 ">
          <div className="flex flex-col bg-orange-500 rounded-xl max-lg:w-70  gap-2">
            <div className=" bg-red-20s0  py-14 md:py-8 px-6 rounded-[10px]">
              <img
                src="svg/game.svg"
                alt=""
                className="min-w-23 h-s50  lg:min-w-90  osbject-cover"
              />
            </div>

            <button className="bg-gray-200 text-black w-full  h-full flex-1 flex items-center gap-2 justify-center rounded-[10px] text-sm md:text-3xl text-primary">
              <Link href="/store" className="font-medium ">
                مشاهده همه
              </Link>
            </button>
          </div>
          <div className="h-82 min-w-50 md:min-w-80 md:h-135 bg-gray-700 rounded-xl p-2 md:p-3">
            <div className="bg-whsite h-45 md:h-75 w-full flex flex-col justify-center items-center rounded-lg">
              <img
                src="/images/fc26.webp"
                alt=""
                className="w-full h-full object-cover  bg-white"
              />
            </div>
            <div className="flex flex-col items-center justify-center divide-y divide-[#E4E4E4] mt-2">
              <h5 className="text-sm md:text-[18px] text-center font-semibold px-3 md:px-8 md:leading-9 py-2 md:py-5">
                گیم‌پلی رقابتی برای مودهای آنلاین مانند آلتیمیت تیم و کلاب‌های
                بازی FC 26 طراحی شده است.
              </h5>
              <p className="text-center py-2 md:text-xl">pc, xbox, ps4, ps5</p>
            </div>
            <div className="flex justify-end items-end"></div>
          </div>
          <div className="h-82 min-w-50 md:min-w-80 md:h-135 bg-gray-700 rounded-xl p-2 md:p-3">
            <div className="bg-whsite h-45 md:h-75 w-full flex flex-col justify-center items-center rounded-lg">
              <img
                src="/images/apex.jpg"
                alt=""
                className="w-full h-full object-cover  bg-white"
              />
            </div>
            <div className="flex flex-col items-center justify-center divide-y divide-[#E4E4E4] mt-2">
              <h5 className="text-sm md:text-[18px] text-center font-semibold px-3 md:px-8 md:leading-9 py-2 md:py-5">
                دریفت:یک تکنیک رانندگی است که در آن راننده به‌طور عمدی خودرو را
                دچار بیش فرمانی می‌کند
              </h5>
              <p className="text-center py-2 md:text-xl">pc,ps4</p>
            </div>
          </div>
          <div className="h-82 min-w-50 md:min-w-80 md:h-135 bg-gray-700 rounded-xl p-2 md:p-3">
            <div className="bg-whsite h-45 md:h-75 w-full flex flex-col justify-center items-center rounded-lg">
              <img
                src="/images/thelastof.png"
                alt=""
                className="w-full h-full object-cover  bg-white"
              />
            </div>
            <div className="flex flex-col items-center justify-center divide-y divide-[#E4E4E4] mt-2">
              <h5 className="text-sm md:text-[18px] text-center font-semibold px-3 md:px-8 md:leading-9 py-2 md:py-5">
                یک بازی ویدئویی ماجراجویی است و توسط ناتی توسعه یافته و
                به‌وسیلهٔ سونی در سال ۲۰۱۳ عرضه شد.
              </h5>
              <p className="text-center py-2 md:text-xl"> ps4, ps5</p>
            </div>
          </div>
          <div className="h-82 min-w-50 md:min-w-80 md:h-135 bg-gray-700 rounded-xl p-2 md:p-3">
            <div className="bg-whsite h-45 md:h-75 w-full flex flex-col justify-center items-center rounded-lg">
              <img
                src="/images/calafmobail.png"
                alt=""
                className="w-full h-full object-cover  bg-white"
              />
            </div>
            <div className="flex flex-col items-center justify-center divide-y divide-[#E4E4E4] mt-2">
              <h5 className="text-sm md:text-[18px] text-center font-semibold px-3 md:px-8 md:leading-9 py-2 md:py-5">
                بازی برای کامپیوتر نسخه اضافه شد در تمام دنیا بازی‌های سبک اکشن
                و شوتر را Call of Duty می‌شناسند.
              </h5>
              <p className="text-center py-2 md:text-xl">pc, xbox, ps4, ps5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSlide;
