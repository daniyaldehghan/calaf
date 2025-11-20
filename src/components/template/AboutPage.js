"use client";

import { useState } from "react";
import Loader from "../module/Loader";
import toast, { Toaster } from "react-hot-toast";

export default function AboutPage() {
  const [loading, isloading] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "09",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    isloading(true);
    const res = await fetch("/api/about", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    isloading(false);
    if (res.status === 201) {
      toast.success(data.message);
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">تماس با ما</h1>
      <p className="mb-5">
        برای اطلاعات بیشتر و ارتباط سریع تر با ما درتماس باشید.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">نام</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="نام"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">ایمیل</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ایمیل"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">
            شماره موبایل (اختیاری)
          </label>
          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">پیام</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="چیزی تایپ کنید..."
            className="w-full border border-gray-300 rounded p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            ارسال
          </button>
        )}

        {status && <p className="mt-2 text-center text-gray-700">{status}</p>}
      </form>
      <Toaster />
    </div>
  );
}
