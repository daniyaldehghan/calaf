"use client";

import { useCart } from "@/src/context/CartContext";

// import { useCart } from "@/context/CartContext";

export default function CartItemCard({ item }) {
  const { increase, decrease, remove } = useCart();
  console.log(item);
  return (
    <div className="flex  max-lg:flex-col justify-between items-center lg:p-6 p-4 bg-zinc-900 rounded-xl shadow-md border border-zinc-800">
      <h3 className=" hidden max-md:block lg:text-lg text-sm  font-semibold ">
        {item.title}
      </h3>
      <div className="flex items-center gap-4 max-lg:flex-col mb-4">
        <img
          src={item.cover}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="">
          <h3 className="hidden lg:block lg:text-lg text-sm  font-semibold ">
            {item.title}
          </h3>
          <p className="text-zinc-400">{item.price} تومان</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decrease(item.id)}
          className="px-3 py-1 bg-red-600 rounded-lg hover:bg-red-700 transition"
        >
          -
        </button>
        <span className="w-6 text-center">{item.qty}</span>
        <button
          onClick={() => increase(item.id)}
          className="px-3 py-1 bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          +
        </button>
        <button
          onClick={() => remove(item.id)}
          className="px-3 py-1 bg-gray-600 rounded-lg hover:bg-gray-700 transition"
        >
          s
        </button>
      </div>
    </div>
  );
}
