"use client";
import { useCart } from "@/src/context/CartContext";
// import { useCart } from "@/src/context/CartContext";
import CartItemCard from "../module/Carditemcheckout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";

function CheckOut() {
  const router = useRouter();
  const { data } = useSession();
  const { items } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null; // یا لودینگ
  if (items.length === 0)
    return <p className="lg:p-6 p-2 flex  text-center">سبد خرید خالی است.</p>;

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const sellHandler = () => {
    if (!data) {
      toast("ابتدا به حساب کاربری خود وارد شوید.");
      router.push("/signin");
      return;
    } else {
      toast.success("اتصال به درگاه پرداخت.");
      router.push("/");
    }
  };
  return (
    <div className="p-6 flex flex-col gap-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">سبد خرید شما</h1>

      {items.map((item) => (
        <CartItemCard key={item.id} item={item} />
      ))}

      <div className="mt-6 text-right text-xl font-bold">
        جمع کل: {total} تومان
      </div>
      <div className="flex justify-between">
        <Link href="/store">
          <button className="mt-4 px-6 py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition">
            ادامه خرید
          </button>
        </Link>
        <button
          onClick={sellHandler}
          className="mt-4 px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition"
        >
          تسویه
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default CheckOut;
