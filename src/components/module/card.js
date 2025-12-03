"use client";

import { useRef, useState } from "react";

const data = [
  {
    id: 1,
    title: "اوین لانچ تریلر سینمایی و لایو اکشن بازی Diablo 4 ",
    src: "/video/diablo.mp4",
    poster: "/images/hul.jpg",
    duration: "1:08",
  },
  {
    id: 2,
    title: "تریلر نسخه جدید Call Of Duty Mobile",
    src: "/video/calaf.mp4",
    poster: "/images/calafmobail.png",
    duration: "00:58",
  },
  {
    id: 3,
    title: "تریلر جذاب بازی Marathon",
    src: "/video/anim1.mp4",
    poster: "/images/speed.jpg",
    duration: "00:32",
  },
  {
    id: 4,
    title: "نخستین تریلر گیم‌پلی بازی Marvel’s Spider-Man 2 منتشر شد.",
    src: "/video/spider.mp4",
    poster: "/images/spiderman.png",
    duration: "00:32",
  },
];

export default function TrailerGrid() {
  const videoRefs = useRef([]); // آرایه refها برای هر ویدیو
  const [playingId, setPlayingId] = useState(null); // id ویدیویی که الان پخشه

  // helper برای اختصاص ref هنگام رندر
  const setVideoRef = (el, idx) => {
    videoRefs.current[idx] = el;
  };

  const handlePlayClick = (idx) => {
    // قبل از پخش، همه ویدیوها رو pause کن
    videoRefs.current.forEach((v, i) => {
      if (v && i !== idx) {
        v.pause();
        v.currentTime = 0;
      }
    });

    const v = videoRefs.current[idx];
    if (!v) return;
    v.play().catch((err) => {
      // در صورت بلاک شدن autoplay توسط مرورگر، فقط state رو ست کن تا دکمه محو شه و کنترل‌ها ظاهر شن
      console.warn("play failed:", err);
      setPlayingId(data[idx].id);
    });
  };

  return (
    <div className="max-w-7xl mx-auto lg:block">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-md:px-6 ">
        {data.map((item, idx) => {
          const isPlaying = playingId === item.id;
          return (
            <div
              key={item.id}
              className=" relative rounded-2xl shadow-xl overflow-hidden bg-gray-900"
            >
              <div className="absolute top-3 right-3 z-20">
                {isPlaying ? null : (
                  <span className="text-sm font-medium bg-black/50 text-white px-2 py-1 rounded-md backdrop-blur-sm">
                    {item.duration}
                  </span>
                )}
              </div>
              <video
                ref={(el) => setVideoRef(el, idx)}
                src={item.src}
                poster={item.poster}
                className="w-full h-40 sm:h-44 md:h-56 object-cover bg-black"
                controls
                preload="metadata"
              />

              {/* عنوان پایین کارت (اختیاری) */}
              <div className="px-4 py-3 bg-gradient-to-t from-black/60 to-transparent mt-2  h-20 lg:h-25 dark:bg-gray-300 ">
                <p className="text-white text-xs font-semibold dark:text-black lg:text-xl ">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
