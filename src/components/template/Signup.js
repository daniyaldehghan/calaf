"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../module/Loader";

function Signup() {
  const [loading, isloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== repassword) {
      toast.error("رمز وتکرار آن برابر نیست!");
      return;
    }
    isloading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    isloading(false);
    if (res.status === 201) {
      toast.success("حساب کاربری با موفقیت ایجاد شد.");
      router.push("/signin");
    } else {
      toast.error(data.error);
      return;
    }
  };
  return (
    <div className="min-h-screen  text-gray-900 flex justify-center  ">
      <div className="max-w-screen-xl  m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-5">
          <div className="flex justify-end items-end ">
            <Link href="/" className=" p-1 rounded-xl ">
              صفحه اصلی
            </Link>
          </div>
          <img src="/images/mario.jpg" className="w-70 lg:w-100" />
          <div className="mt-1 flex flex-col items-center">
            <div className="w-full flex-1 mt-2">
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  فرم ثبت نام
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="رمز عبور"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="تکرار رمز عبور"
                  value={repassword}
                  onChange={(e) => setrepassword(e.target.value)}
                />
                {loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    onClick={submitHandler}
                    className="mt-5 cursor-pointer tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className=""> ثبت نام</span>
                  </button>
                )}
                <p className="mt-6 text-xs text-gray-600 text-center">
                  حساب کاربری دارید ؟
                  <Link
                    href="/signin"
                    className="border-b border-gray-500  mr-2"
                  >
                    ورود
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden  lg:flex">
          <div className=" xl:m-s16 w-full  bg-contain bg-center bg-no-repeat ">
            <img src="/images/2.png" className="w-full h-full object-cover " />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Signup;
