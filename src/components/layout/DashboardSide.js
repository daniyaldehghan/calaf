import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "../module/LogoutButton";

function DashboardSide({ role, children, email }) {
  return (
    <div className="flex    lg:gap-15 lg:px-6 lg:py-8 gap-4 px-4  max-lg:flex-col dark:bg-white   ">
      <div className="flex max-lg:w-full    lg:sticky lg:top-45   flex-col items-center max-lg:-90 max-lg:m-auto max-lg:mb-5  p-2 md:p-10 h-full lg:w-50  shadow-[0_1px_5px_0_#FFF] dark:shadow-[black]">
        <CgProfile className="size-6 lg:size-10 dark:text-black" />
        {role === "ADMIN" ? "ادمین" : null}
        <p className="text-gray-300 font-medium mt-5 dark:text-gray-700">
          {email}
        </p>
        <span className="bg-[#5c638d] w-full h-1 mb-4"></span>
        <Link
          className="m-1 font-medium w-full dark:text-black"
          href="/dashboard"
        >
          حساب کاربری
        </Link>
        <Link
          className="m-1 font-medium w-full dark:text-black"
          href="/dashboard/checkout"
        >
          سبد خرید
        </Link>
        <Link
          className="m-1 font-medium w-full dark:text-black"
          href="/dashboard/my-profile"
        >
          آگهی های من
        </Link>
        <Link
          className="m-1 font-medium w-full dark:text-black"
          href="/dashboard/add-profile"
        >
          ثبت آگهی
        </Link>
        {role === "ADMIN" ? (
          <Link
            href="/admin"
            className="m-1 font-medium w-full dark:text-black"
          >
            درانتطار انتشار
          </Link>
        ) : null}
        <LogoutButton />
      </div>
      <div className="sticky top-6 space-y-4">{children}</div>
    </div>
  );
}

export default DashboardSide;
