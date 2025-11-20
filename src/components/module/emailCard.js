"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader";

export default function LoginModal({ open, onClose }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleLogin = async () => {
    setLoading(true);

    const res = await signIn("email", {
      email,
      redirect: false, // 👈 خیلی مهم!
    });
    if (!email) {
      toast.error("لطفا ایمیل خود را وارد کنید.");
      setLoading(false);
      return;
    } else if (res.error) {
      toast.error("ایمیل شما صحیح نیست!");
      setLoading(false);
      return;
    } else {
      toast.success("لینک ورود به ایمیل شما ارسال شد.");
      setLoading(false);
      return;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-2xl w-80 lg:w-110  shadow-2xl border border-white/10">
        <h2 className="text-xl font-medume mb-4 text-center flex ">
          ورود با ایمیل
        </h2>

        <input
          type="email"
          className="w-full p-3 rounded bg-gray-800 mb-4"
          placeholder="example.gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {loading ? (
          <Loader />
        ) : (
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full p-3 bg-blue-600 rounded hover:bg-blue-700 cursor-pointer"
          >
            ارسال لینک
          </button>
        )}

        <button
          onClick={() => onClose()}
          className="w-full p-2 mt-3 text-gray-400 hover:text-white"
        >
          بستن
        </button>
      </div>
      <Toaster />
    </div>
  );
}
