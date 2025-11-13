"use client";
import React, { useRef, useState } from "react";

function Treyler() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="w-full lg:mt-4 px-6 mb-6 relative -top-15 bg-rsed-50 flex flex-col justify-center items-center ">
      <h4 className="lg:text-2xl">تریلر بازی ها</h4>
      <div className="border-b border-gray-500 mt-1 mb-4  w-20  "></div>

      <div className="bg-[#1b1d24] rounded-2xl p-2">
        <video
          src="/video/anim1.mp4"
          poster="/images/poster.png"
          controls={playing}
          ref={videoRef}
          className="lg:w-370 w-150 h-[30vh] lg:h-[70vh] object-cover rounded-2xl"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <button
            onClick={() => videoRef.current.play()}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className=" backdrop-blur-xs -top-35 relative bg-black/70 w-10 h-10 md:w-18 md:h-15 rounded-2xl cursor-pointer hover:text-[#FF754C] transition-colors md:text-2xl  flex items-center justify-center   ">
              ▶
            </div>
          </button>
        )}
        <div className="bg-red-3d00   px-6 py-14">
          <h4 className="mb-4 text-2xl lg:text-4xl ">
            تریلر رسمی بازی Metal Gear Solid Delta: Snake Eater
          </h4>
          <p className="text-xs lg:text-xl lg:w-240 ">
            شایعه ساخت Metal Gear Solid Delta: Snake Eater قوت گرفت. طبق گفته ها
            و نشریات وابسته به استودیو های سازنده این عنوان خاطره انگیز، خبر های
            خوبی از ساخت نسخه ریمیک و یا همان بهبود یافته در راه است.
          </p>
          <div className="border-b border-gray-500 mb-9 lg:w-300 mt-8"></div>

          <div className="flex gap-2 items-center ">
            <img src="/images/share.png" className="size-4  col lg:size-6 " />
            <span>اشتراک گذاری</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treyler;
