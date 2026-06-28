"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Call of Duty Warzone",
    subtitle:
      "مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد بازیکنان آن است.",
    image: "./images/slider1.png",
  },
  {
    id: 2,
    title: "League of Legends",
    subtitle:
      "سبک محبوب MOBA از یک نقشه در بازی Warcraft 3 مسیر خود را آغاز کرد. این نقشه که به‌تدریج محبوبیتش در سطح خود بازی اصلی قرار گرفت  نام داشت که مخفف عبارت Defense of the Ancients بود.",
    image: "/images/slider2.png",
  },
  {
    id: 3,
    title: "Call of Duty: WWII",
    subtitle:
      "بازی Call of Duty: WWII برای کامپیوتر نسخه  اضافه شد در تمام دنیا بازی‌های سبک اکشن و شوتر را با عنوان Call of Duty می‌شناسند.. ",
    image: "/images/slider3.jpg",
  },
];

export default function MotionSlider() {
  const [current, setCurrent] = useState(0);

  //dasdadaad
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="contaienr relative  lg:w-full m-auto lg:h-[110vh] h-[30vh] overflow-hidden shadow-xl ">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center   justify-center lg:items-end lg:justify-end px-8 py-20   blur:"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="  absolute inset-0 w-full  h-full  object-cover brightness-85"
          />
          <div className="   relative  hidsden max-md:w-60 md:w-100 p-1 max-lg:h-fit  lg:w-120  top-13    lg:top-8 lg:block text-center backdrop-blur-3xl lg:left-3 lg:p-10 max-lgs:top-30  rounded-2xl text-white ">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:text-4xl md:text-xl font-bold text-sm"
            >
              {slides[current].title}
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="lg:text-lg md:text-xl lg:mt-4 mt-1 text-xs max-md:leading-3.5 max-lg:leading-7"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.button className="lg:text-lg border text-xs   border-gray-400 rounded-2xl lg:p-2 p-1 cursor-pointer hover:text-black transition-colors hover:bg-amber-100  text-white md:text-2xl mt-1 lg:mt-4">
              <Link href="/store">خرید </Link>
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* دکمه‌های دستی */}
      <div className="absolute bottom-1  lg:bottom-5 lg:left-1/2 left-50  -translate-x-1/2 flex gap-1  lg:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`lg:w-3 w-1 h-1 lg:h-3 rounded-full transition-all ${
              current === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
