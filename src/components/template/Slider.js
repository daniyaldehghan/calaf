"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "اسلایدر موشن خفن",
    subtitle: "حرکت نرم، طراحی مدرن",
    image: "./images/slider1.png",
  },
  {
    id: 2,
    title: "کاملاً واکنش‌گرا",
    subtitle: "سازگار با موبایل و دسکتاپ",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    title: "قدرت گرفته از Framer Motion",
    subtitle: "انیمیشن طبیعی و سریع",
    image: "/images/slide3.jpg",
  },
];

export default function MotionSlider() {
  const [current, setCurrent] = useState(0);

  // تغییر خودکار هر ۵ ثانیه
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrent((prev) => (prev + 1) % slides.length);
  //     }, 5000);
  //     return () => clearInterval(timer);
  //   }, []);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="relative w-full m-auto lg:h-[80vh] h-[60vh] overflow-hidden rounded-sm shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center  justify-center lg:items-end lg:justify-end px-8 py-20 blur:"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="relative text-center backdrop-blur-3xl lg:left-20 p-10 max-lg:top-30  rounded-2xl text-white z-10">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold"
            >
              {slides[current].title}
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-2xl mt-4"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.button className="text-lg border border-gray-400 rounded-2xl p-2 cursor-pointer hover:text-black transition-colors hover:bg-amber-100  text-white md:text-2xl mt-4">
              بیشتر بدانید
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* دکمه‌های دستی */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
