"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "بازی FIFA 23 برای کنسول پلی استیشن ۵",
    price: "قیمت ۴/۵۰۰ هزار تومان",
    desc: "۲۵۷ نفر خرید کرده اند.",
    img: "/images/fifa.png",
  },
  {
    id: 2,
    name: "بازی Call Of Duty برای کنسول پلی استیشن ۵",
    price: "قیمت ۲/۳۰۰ هزار تومان",
    desc: "۲۵۷ نفر خرید کرده اند.",
    img: "/images/gost.png",
  },
  {
    id: 3,
    name: "بازی Diablo 4 برای کنسول پلی استیشن ۵",
    price: "قیمت ۳/۶۰۰ هزار تومان",
    desc: "۲۵۷ نفر خرید کرده اند.",
    img: "/images/card1.jpg",
  },
  {
    id: 4,
    name: "بازی Fortnite برای کنسول پلی استیشن ۵",
    price: "قیمت ۳/۴۵۰ هزار تومان",
    desc: "۲۵۷ نفر خرید کرده اند.",
    img: "/images/fortnigth.jpg",
  },
];

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + products.length) % products.length);

  //   useEffect(() => {
  //     const timer = setInterval(() => nextSlide(), 5000);
  //     return () => clearInterval(timer);
  //   }, []);

  const getPosition = (i) => {
    const diff = (i - index + products.length) % products.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === products.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className="container m-auto   flex flex-col px-8">
      <h1 className="relative top-10 text-sm dark:text-black lg:text-2xl px-4 lg:mt-5 mb-4 font-medium">
        جدیدترین بازی های فروشگاه
      </h1>
      <div className="flex flex-col items-center justify-center max-lg:min-h-[65vh] lg:min-h-[80vh]  transition-colors relative overflow-hidden">
        <div className="relative -top-10 w-full max-w-[900px] h-[350px] flex items-center justify-center">
          {products.map((product, i) => {
            const pos = getPosition(i);
            return (
              <motion.div
                key={product.id}
                className={`absolute w-[60%] mt-5 lg:w-150 md:w-[50%] h-[350px]  lg:h-[500px] rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${
                  pos === "center"
                    ? "z-30 scale-100"
                    : pos === "left" || pos === "right"
                    ? "z-20 scale-90 blur-[2px] opacity-70"
                    : "opacity-0 pointer-events-none"
                } ${
                  pos === "left"
                    ? "-translate-x-[55%]"
                    : pos === "right"
                    ? "translate-x-[55%]"
                    : ""
                }`}
                animate={{
                  opacity: pos === "hidden" ? 0 : 1,
                  scale: pos === "center" ? 1 : 0.9,
                }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute bottom-0 w-full p-4 ${
                    pos === "center"
                      ? "bg-black/70"
                      : "bg-black/40 backdrop-blur-sm"
                  } text-white text-center`}
                >
                  <h2 className="text-lg font-bold lg:text-2xl ">
                    {product.name}
                  </h2>
                  <p className="text-sm mt-2 text-[#FF754C] lg:text-xl">
                    {product.price}
                  </p>
                  <div className="flex justify-between px-6 items-center mt-5 border-t-2 py-2">
                    {pos === "center" && (
                      <p className="text-xs text-gray-300 mt-1 lg:text-sm">
                        {product.desc}
                      </p>
                    )}
                    <motion.button className="bg-[#FF754C] text-white dark:text-black px-4 py-2 rounded-xl hover:bg-[#e68365] transition cursor-pointer">
                      <Link href="/store"> خرید</Link>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* دکمه‌های کنترل */}
          <button
            onClick={prevSlide}
            className="absolute left-4 dark:text-black dark:bg-white bg-gray-800/50 font-bold text-xl hover:bg-gray-800/70 text-white rounded-full w-10 h-10 flex items-center justify-center z-40"
          >
            ›
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 font-bold text-xl dark:text-black dark:bg-white bg-gray-800/50 hover:bg-gray-800/70 text-white rounded-full w-10 h-10 flex items-center justify-center z-40"
          >
            ‹
          </button>
        </div>

        {/* نشانگرها */}
        <div className="flex gap-2 mt-6">
          {products.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all lg:mt-10 ${
                i === index ? "bg-indigo-600 scale-110" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
