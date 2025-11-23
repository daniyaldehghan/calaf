import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "../module/LogoutButton";

function DashboardSide({ role, children, email }) {
  return (
    <div className="flex lg:gap-15 lg:px-6 lg:py-8 gap-4 px-4 max-lg:mt-8  ">
      <div className="flex flex-col items-center max-lg:w-45  p-2 md:p-10 h-full  shadow-[0_1px_5px_0_#FFF]">
        <CgProfile className="size-6 lg:size-10" />
        {role === "ADMIN" ? "ادمین" : null}
        <p className="text-gray-300 font-medium mt-5">{email}</p>
        <span className="bg-[#5c638d] w-full h-1 mb-4"></span>
        <Link className="m-1 font-medium w-full" href="/dashboard">
          حساب کاربری
        </Link>
        <Link className="m-1 font-medium w-full" href="/dashboard/checkout">
          سبد خرید
        </Link>
        <Link className="m-1 font-medium w-full" href="/dashboard/my-profile">
          آگهی های من
        </Link>
        <Link className="m-1 font-medium w-full" href="/dashboard/add-profile">
          ثبت آگهی
        </Link>
        {role === "ADMIN" ? (
          <Link href="/admin" className="m-1 font-medium w-full">
            درانتطار انتشار
          </Link>
        ) : null}
        <LogoutButton />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default DashboardSide;
