"use client";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import Search from "../module/Search";
import { usePathname } from "next/navigation";

function Header() {
  const { data } = useSession();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setMounted(true);
    setOpen(false);
  }, [pathname]);
  if (!mounted) {
    return <button className="p-2 rounded  dark:bg-gray-7s00"></button>;
  }
  return (
    <div className=" dark:bg-white w-full m-auto">
      <div className="h-13 md:h-[70px] bg-[#f13a0352]  flex items-center justify-center">
        <p className="lg:text-2xl text-sm font-semibold bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500  bg-clip-text text-transparent ">
          تا ۷۰٪ تخفیف شگفت‌انگیز! ⏳ فقط برای مدت محدود !
        </p>
      </div>
      <div className="flex justify-between items-center    px-6 py-4  lg:px-8 lg:py-14  gap-8">
        <div className="flex items-center text-center gap-2 lg:gap-6 ">
          <img src="/svg/game.svg" className="size-10 lg:size-20 ml-5" />
          <div>
            <ul className="hidden  lg:flex max-lg:w-60  max-lg:gap-4 items-center gap-2  lg:gap-8 text-xs  lg:text-2xl font-medium lg:w-140 text-[#C6C6C6] dark:text-black">
              <Link href="/">خانه</Link>
              <Link href="/store">فروشگاه</Link>
              <Link href="/sellgame">فروش بازی</Link>
              <Link href="/about">تماس با ما</Link>
              <Link
                href="#"
                onClick={() => toast("این صفحه درحال توسعه می باشد😊")}
              >
                وبلاگ
              </Link>
            </ul>
          </div>
        </div>

        <div className="hidden md:block  p-2  lg:p-4 bg-gray-600 max-lg:w-full rounded-2xl mr-9 lg:w-95 justify-center md:justify-between  ">
          <Search />
          {/* <button type="submit"></button> */}
        </div>
        <div className=" flex items-center justify-center gap-4  text-center ">
          <button
            onClick={() => setOpen(!open)}
            className="block dark:text-black lg:hidden text-2xl mt-3 cursor-pointer hover:text-gray-400  transition-colors "
          >
            {open ? "X" : "☰"}
          </button>

          <button
            className="pt-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          {data ? (
            <Link href="/dashboard">
              <button className=" rounded-xl dark:text-black  lg:w-25 h-s8 lg:h-12 hosver:bg-[#5c51a3]  cursor-pointer text-sm lg:text-2xl  flex items-center justify-center  ">
                <FaUserAlt className="size-5 lg:size-8" />
              </button>
            </Link>
          ) : (
            <Link href="/signup">
              <button className="bg-[#6C5DD3] rounded-xl w-20 lg:w-40 h-8 lg:h-12 hover:bg-[#5c51a3]  cursor-pointer text-sm lg:text-2xl  ">
                ورود/ثبت نام
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="relative backdrop-blur-2xl z-10 flex justify-center  ">
        {open && (
          <ul className=" absolute z-10 flex w-80 md:w-170 flex-col bg-white lg:hidden border-t text-gray-700 px-4  font-medium animate-fadeIn">
            <li className="p-3 border-b hover:bg-gray-300">
              <Link href="/">خانه</Link>
            </li>
            <li className="p-3 border-b hover:bg-gray-300">
              <Link href="/store">فروشگاه</Link>
            </li>
            {/* <li className="p-3 border-b hover:bg-gray-300">
              <Link href="/about">درباره ما</Link>
            </li> */}
            <li className="p-3 border-b hover:bg-gray-300">
              <Link href="/about">تماس با ما</Link>
            </li>
            <li className="p-3 border-b hover:bg-gray-300">
              <Link href="/sellgame">فروش بازی</Link>
            </li>
            <li className="p-3 border-b hover:bg-gray-300">
              <Link
                href="#"
                onClick={() => toast("این صفحه درحال توسعه می باشد😊")}
              >
                وبلاگ
              </Link>
            </li>
          </ul>
        )}
      </div>
      {/* <div className="flex items-center justify-center md:hidden">
        <input
          className="text-white bg-gray-700 focus:outline-0 p-1 rounded-xl "
          placeholder="دنبال چی میگردی؟"
        />
      </div> */}
      <Toaster />
    </div>
  );
}

export default Header;
