"use client";
import React, { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Metal Gear Solid Delta: Snake Eater",
    poster: "/images/0.jpg",
    video: "/video/metal.mp4",
  },
  {
    id: 2,
    title: " The Last of Us Part 1",
    poster: "/images/2.png",
    video: "/video/last.mp4",
  },
  {
    id: 3,
    title: "Alan Wake 2",
    poster: "/images/1.jpg",
    video: "/video/alen.mp4",
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleClose = () => setActiveVideo(null);

  return (
    <div className="container mx-auto  px-6 py-10 bg-grsay-900 relative -top-30">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl dark:text-black lg:2xl font-medium text-center     ">
          جدیدترین نقد و بررسی ها
        </h2>
        <div className="border-b dark:border-gray-700 border-gray-500 mb-9 w-50 mt-4 "></div>
      </div>

      {/* کارت‌ها */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <div
            key={v.id}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          >
            <img
              src={v.poster}
              alt={v.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-20    mt-20  opacity-100 font-semibold lg:text-2xl flex flex-col justify-center items-center text-center text-white p-4">
              <h3 className="text-lg font-semibold mb lg:text-2xl ">
                نقد و بررسی بازی{" "}
              </h3>
              <p className="text-sm  p-2 font-medium">{v.title}</p>
              <button
                onClick={() => setActiveVideo(v)}
                className=" backdrop-blur-3xl bg-[#0000006b] hover:bg-red-600 text-white px-2 py-2 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* هاور لایه و دکمه */}
            <div className="hidden md:block">
              <div className="  absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex flex-col justify-center items-center text-center text-white p-4">
                <h3 className="text-lg font-semibold mb lg:text-2xl">
                  نقد و بررسی بازی{" "}
                </h3>
                <p className="text-sm  p-2 font-medium">{v.title}</p>

                <button
                  onClick={() => setActiveVideo(v)}
                  className="backdrop-blur-3xl bg-[#0000006b] hover:bg-[#FF754C] text-white px-2 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl w-11/12 sm:w-3/4 lg:w-2/3">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 w-10 bg-white hover:bg-white/40 text-black rounded-full p-2 transition"
            >
              ✕
            </button>

            <video
              src={activeVideo.video}
              controls
              autoPlay
              className="w-full lg:h-[70vh] h-[40vh] md:h-[60vh] items-center  object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
