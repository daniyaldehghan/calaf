"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <button className="p-2 rounded bg-gray-200 dark:bg-gray-700">...</button>
    );
  }
  return (
    <div className=" container w-full m-auto px-6 py-4 ">
      <div className="containser m-auo flex justify-between items-center w-ft   px-6 py-4  lg:px-8 lg:py-14  gap-8">
        <div className="flex items-center text-center gap-2 lg:gap-6 ">
          <img src="/svg/game.svg" className="size-10 lg:size-20 ml-5" />
          <div>
            <ul className="hidden  md:flex  items-center gap-2  lg:gap-6 text-xs  lg:text-2xl font-medium text-[#C6C6C6]">
              <Link href="#">خانه</Link>
              <Link href="#">فروشگاه</Link>
              <Link href="#">درباره ما</Link>
              <Link href="#">تماس با ما</Link>
              <Link href="#">وبلاگ</Link>
            </ul>
          </div>
        </div>

        <div className="hidden md:flex  p-2 bg-gray-600 max-lg:w-full rounded-2xl mr- lg:w-90 justify-center lg:justify-between  ">
          <input
            type="text"
            placeholder="دنبال چی  هستی؟"
            className="hiddesn focus:outline-0  md:block"
          />
          <img src="/svg/search.svg" className="w-6 pl-2   " />
        </div>
        <div className=" flex items-center justify-center gap-4  text-center ">
          <button
            onClick={() => setOpen(!open)}
            className="block md:hidden text-2xl mt-3 cursor-pointer hover:text-gray-400  transition-colors "
          >
            {open ? "X" : "☰"}
          </button>
          <button
            className="pt-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button className="bg-[#6C5DD3] p-2  lg:p-5 lg:leading-1  rounded-xl w-15 h-8 lg:h-10 hover:bg-[#5c51a3]  cursor-pointer text-sm lg:text-2xl  ">
            ثبت نام
          </button>
        </div>
      </div>
      {open && (
        <ul className="flex flex-col bg-white md:hidden border-t text-gray-700 px-4  font-medium animate-fadeIn">
          <li className="p-3 border-b hover:bg-gray-300">
            <Link href="#">خانه</Link>
          </li>
          <li className="p-3 border-b hover:bg-gray-300">
            <Link href="#">فروشگاه</Link>
          </li>
          <li className="p-3 border-b hover:bg-gray-300">
            <Link href="#">درباره ما</Link>
          </li>
          <li className="p-3 border-b hover:bg-gray-300">
            <Link href="#">تماس با ما</Link>
          </li>
          <li className="p-3 border-b hover:bg-gray-300">
            <Link href="#">وبلاگ</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
