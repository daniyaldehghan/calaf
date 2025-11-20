"use client";

import { useCart } from "@/src/context/CartContext";
import { useEffect, useState } from "react";

export default function ProductCard({ product, available }) {
  const { items, addToCart, increase, decrease } = useCart();
  const inCart = items.find((i) => i.id === product.id);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // یا لودینگ

  // بررسی می‌کنیم آیا محصول داخل سبد هست

  return (
    <div className=" flesx itemss-center jusstify-center pys-4 ">
      {/* <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-zinc-400">{product.price} تومان</p> */}

      {/* اگر محصول داخل سبد نیست → دکمه افزودن */}
      {!inCart && (
        <button
          onClick={() => addToCart(product)}
          className={`flex-1 py-2 rounded-xl text-sm w-20 ${
            available
              ? "bg-indigo-600/80"
              : "bg-neutral-700/60 cursor-not-allowed"
          }`}
          disabled={!available}
        >
          {available ? " خرید" : "ناموجود"}
        </button>
      )}

      {/* اگر محصول هست → دکمه‌های کم/زیاد */}
      {inCart && (
        <div className="flex items-center lg:gap-8 gap-2 lg:p-2">
          <span
            onClick={() => decrease(product.id)}
            className="py-.5 px-2 lg:px-3 lg:py-1 bg-red-600 rounded-lg"
          >
            -
          </span>
          <span className="text-sm lg:text-xl">{inCart.qty}</span>
          <span
            onClick={() => increase(product.id)}
            className=" py-.5 px-2 lg:px-3 lg:py-1 bg-green-600 rounded-lg "
          >
            +
          </span>
        </div>
      )}
    </div>
  );
}
