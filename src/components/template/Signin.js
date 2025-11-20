"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { ThreeDots } from "react-loader-spinner";
import Loader from "../module/Loader";
import LoginModal from "../module/emailCard";

function Signin() {
  const [open, setOpen] = useState(false);
  const [loading, isloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    isloading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    isloading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("با موفقیت به حساب کاربری وارد شدید.");
      router.push("/");
      return;
    }
  };

  return (
    <div className="min-h-screen  text-gray-900 flex justify-center  ">
      <div className="max-w-screen-xl  m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-green-100 text-center hidden  lg:flex">
          <div className=" xl:m-s16 w-full  bg-contain bg-center bg-no-repeat ">
            <img src="/images/0.jpg" className="w-full h-full object-cover " />
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-4">
          <div className="flex justify-end items-end ">
            <Link href="/" className=" p-1 rounded-xl ">
              صفحه اصلی
            </Link>
          </div>
          <div className=" ">
            <img src="/images/mario.jpg" className="w-mx-autos w-70 lg:w-100" />
          </div>
          <div className="mt-5 lg:mt-1 flex flex-col items-center">
            <div className=" flex-1 mt-8">
              <div className="my-12 border-b text-center">
                <div className="leading-none x-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  فرم ورود
                </div>
              </div>
              <div className="bg-blue-400 flex items-center justify-center mb-4 flex-1 w-f hover:bg-blue-300 transition-all cursor-pointer rounded-2xl ">
                <FcGoogle className="bg-white" />
                <button
                  onClick={() => setOpen(true)}
                  className=" px-4 py-2 rounded text-black font-medium  cursor-pointer"
                >
                  ورود با ایمیل
                </button>

                <LoginModal open={open} onClose={() => setOpen(false)} />
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

                {!!loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    onClick={submitHandler}
                    className="mt-5 cursor-pointer tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className=""> ورود</span>
                  </button>
                )}
                <p className="mt-6 text-xs text-gray-600 text-center">
                  حساب کاربری ندارید؟
                  <Link
                    href="/signup"
                    className="border-b border-gray-500  mr-2"
                  >
                    ثبت نام
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Signin;
