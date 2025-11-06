"use client";
import React, { useState } from "react";

const videos = [
  {
    id: 1,
    title: "نقد و بررسی بازی Elden Ring",
    poster: "/images/0.jpg",
    video: "/video/anim1.mp4",
  },
  {
    id: 2,
    title: "نقد و بررسی بازی Elden Ring",
    poster: "/images/0.jpg",
    video: "/video/anim1.mp4",
  },
  {
    id: 3,
    title: "نقد و بررسی بازی Elden Ring",
    poster: "/images/0.jpg",
    video: "/video/anim1.mp4",
  },
  //   {
  //     id: 2,
  //     title: "نقد و بررسی بازی Ghost of Tsushima",
  //     poster: "/images/game2.jpg",
  //     video: "/videos/game2.mp4",
  //   },
  //   {
  //     id: 3,
  //     title: "نقد و بررسی بازی God of War Ragnarok",
  //     poster: "/images/game3.jpg",
  //     video: "/videos/game3.mp4",
  //   },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleClose = () => setActiveVideo(null);

  return (
    <div className="container mx-auto px-6 py-10 bg-gray-900 relative -top-30">
      <h2 className="text-xl lg:2xl font-medium text-center mb-8  ">
        تریلر بازی ها
      </h2>

      {/* کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* هاور لایه و دکمه */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex flex-col justify-center items-center text-center text-white p-4">
              <h3 className="text-lg font-semibold mb-3">{v.title}</h3>

              <button
                onClick={() => setActiveVideo(v)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                پخش فیلم
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* مودال پخش ویدیو */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl w-11/12 sm:w-3/4 lg:w-2/3">
            {/* دکمه بستن */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
            >
              ✕
            </button>

            {/* ویدیو */}
            <video
              src={activeVideo.video}
              controls
              autoPlay
              className="w-full h-[70vh] object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
