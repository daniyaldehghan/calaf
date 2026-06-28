"use client";

import PRODUCTS from "@/src/data/products";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../module/Cart";
import Link from "next/link";
import Shopcart from "../module/shopcart";
import { sp } from "@/src/utils/replaceNumber";

export default function ShopPageNoHeader() {
  const [modal, setmodal] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [sortBy, setSortBy] = useState("newest");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // debounce search input (300ms)
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(t);
  }, [query]);

  const PLATFORMS = ["PC", "PS5", "PS4", "Xbox", "Switch"];
  const GENRES = ["Action", "RPG", "Shooter", "Racing", "Adventure", "Sports"];

  function toggleArray(stateSetter, arr, value) {
    if (arr.includes(value)) stateSetter(arr.filter((x) => x !== value));
    else stateSetter([...arr, value]);
  }

  const productsFiltered = useMemo(() => {
    const [minP, maxP] = priceRange;

    let list = PRODUCTS.filter((p) => {
      // search
      if (debouncedQuery) {
        const q = debouncedQuery.toLowerCase();
        if (!p.title.toLowerCase().includes(q)) return false;
      }
      // platform
      if (selectedPlatforms.length > 0) {
        if (!p.platforms.some((pl) => selectedPlatforms.includes(pl)))
          return false;
      }
      // genre
      if (selectedGenres.length > 0 && !selectedGenres.includes(p.genre))
        return false;
      // price after discount
      const finalPrice = +(p.price * (1 - (p.discount || 0) / 100)).toFixed(2);
      if (finalPrice < minP || finalPrice > maxP) return false;

      return true;
    });

    // sort
    list.sort((a, b) => {
      const priceA = a.price * (1 - (a.discount || 0) / 100);
      const priceB = b.price * (1 - (b.discount || 0) / 100);

      switch (sortBy) {
        case "price_low":
          return priceA - priceB;
        case "price_high":
          return priceB - priceA;
        case "rating":
          return b.rating - a.rating;
        case "popular":
          return b.rating - a.rating; // mock: use rating as popularity proxy
        case "newest":
        default:
          return b.id - a.id; // mock newest by id
      }
    });

    return list;
  }, [debouncedQuery, selectedPlatforms, selectedGenres, priceRange, sortBy]);

  // helpers for price slider display
  const maxProductPrice = useMemo(
    () => Math.max(...PRODUCTS.map((p) => p.price), 100),
    []
  );

  return (
    <main className="min-h-screen dark:bg-white   text-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl dark:sbg-white">
        {/* Top controls: search + mobile filter toggle */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex-1">
            <label className="relative block">
              <span className="sr-only">Search games</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجو بازی، ژانر، ..."
                className="w-full rounded-2xl dark:bg-white dark:text-black bg-neutral-800/60 backdrop-blur-sm border border-neutral-700 py-3 px-4 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowMobileFilters((s) => !s)}
              className="md:hidden inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-sm font-medium shadow-lg"
            >
              فیلترها
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="hidden md:inline-block rounded-xl dark:bg-white dark:text-black bg-neutral-800/60 px-3 py-2 border border-neutral-700"
            >
              <option value="newest">جدیدترین</option>
              <option value="price_low">ارزان‌ترین</option>
              <option value="price_high">گران‌ترین</option>
              <option value="rating">بهترین امتیاز</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Filters sidebar (desktop) */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-2">
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl dark:bg-white bg-neutral-900/50 border border-neutral-700 p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold mb-3 dark:text-black">
                  پلتفرم
                </h3>
                <div className="grid grid-cols-2 gap-2 ">
                  {PLATFORMS.map((pl) => (
                    <button
                      key={pl}
                      onClick={() =>
                        toggleArray(setSelectedPlatforms, selectedPlatforms, pl)
                      }
                      className={`text-sm px-3 py-2 rounded-xl border dark:text-black dark:bg-white ${
                        selectedPlatforms.includes(pl)
                          ? "bg-indigo-600/80 border-indigo-500"
                          : "bg-neutral-800/40 border-neutral-700"
                      }`}
                    >
                      {pl}
                      
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-neutral-900/50 border dark:bg-white border-neutral-700 p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold mb-3 dark:text-black">
                  ژانر
                </h3>
                <div className="flex flex-wrap gap-2">
                  {GENRES.map((g) => (
                    <button
                      key={g}
                      onClick={() =>
                        toggleArray(setSelectedGenres, selectedGenres, g)
                      }
                      className={`text-sm px-3 py-2 rounded-full border dark:bg-white dark:text-black ${
                        selectedGenres.includes(g)
                          ? "bg-purple-600/70 border-purple-500"
                          : "bg-neutral-800/40 border-neutral-700"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl dark:text-black dark:bg-white bg-neutral-900/50 border border-neutral-700 p-4 backdrop-blur-sm">
                <h3 className="text-sm font-semibold mb-3">قیمت (تومان)</h3>
                <div className="space-y-2">
                  <div className="text-xs text-neutral-400">
                    {priceRange[0].toFixed(0)} — {priceRange[1].toFixed(0)}
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={Math.ceil(maxProductPrice)}
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={Math.ceil(maxProductPrice)}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl dark:bg-white bg-neutral-900/40 border border-neutral-700 p-3">
                <button
                  onClick={() => {
                    setSelectedGenres([]);
                    setSelectedPlatforms([]);
                    setPriceRange([0, Math.ceil(maxProductPrice)]);
                    setQuery("");
                    setSortBy("newest");
                  }}
                  className="w-full dark:hover:text-white dark:text-black dark:bg-white rounded-xl py-2 hover:bg-purple-900 transition-colors bg-neutral-800/50 border border-neutral-700"
                >
                  پاکسازی فیلترها
                </button>
              </div>
            </div>
          </aside>

          {/* Content: mobile filters (collapsible) + grid */}
          <section className="md:col-span-9 lg:col-span-10 relative ">
            {/* Mobile filters accordion */}
            {showMobileFilters && (
              <div className=" absolute z-10 md:hidden  space-y-3 bg-neutral-900">
                <div className="rounded-2xl   border border-neutral-700 p-4">
                  <h4 className="font-semibold mb-2">پلتفرم</h4>
                  <div className="flex gap-2 flex-wrap">
                    {PLATFORMS.map((pl) => (
                      <button
                        key={pl}
                        onClick={() =>
                          toggleArray(
                            setSelectedPlatforms,
                            selectedPlatforms,
                            pl
                          )
                        }
                        className={`text-sm px-3 py-2 rounded-xl border ${
                          selectedPlatforms.includes(pl)
                            ? "bg-indigo-600/80 border-indigo-500"
                            : "bg-neutral-800/40 border-neutral-700"
                        }`}
                      >
                        {pl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-900/50 border border-neutral-700 p-4">
                  <h4 className="font-semibold mb-2">ژانر</h4>
                  <div className="flex gap-2 flex-wrap">
                    {GENRES.map((g) => (
                      <button
                        key={g}
                        onClick={() =>
                          toggleArray(setSelectedGenres, selectedGenres, g)
                        }
                        className={`text-sm px-3 py-2 rounded-full border ${
                          selectedGenres.includes(g)
                            ? "bg-purple-600/70 border-purple-500"
                            : "bg-neutral-800/40 border-neutral-700"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-neutral-900/50 border border-neutral-700 p-4">
                  <h4 className="font-semibold mb-2">قیمت</h4>
                  <div className="space-y-2">
                    <div className="text-xs text-neutral-400">
                      {priceRange[0].toFixed(0)} — {priceRange[1].toFixed(0)}
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={Math.ceil(maxProductPrice)}
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="w-full"
                    />
                    <input
                      type="range"
                      min={0}
                      max={Math.ceil(maxProductPrice)}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="flex gap-2  mb-5">
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="flex-1 rounded-xl py-2 bg-neutral-800/50 border border-neutral-700"
                  >
                    اعمال
                  </button>
                  <button
                    onClick={() => {
                      setSelectedGenres([]);
                      setSelectedPlatforms([]);
                      setPriceRange([0, Math.ceil(maxProductPrice)]);
                      setQuery("");
                    }}
                    className="flex-1 rounded-xl py-2 bg-gradient-to-r from-red-600 to-pink-600"
                  >
                    پاکسازی
                  </button>
                </div>
              </div>
            )}

            {/* Product count and sort for mobile */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-neutral-300 dark:text-black font-semibold">
                نمایش {productsFiltered.length} محصول
              </div>
              <div className="md:hidden">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-xl bg-neutral-800/60 px-3 py-2 border border-neutral-700"
                >
                  <option value="newest">جدیدترین</option>
                  <option value="price_low">ارزان‌ترین</option>
                  <option value="price_high">گران‌ترین</option>
                  <option value="rating">بهترین امتیاز</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {productsFiltered.map((p) => {
                const finalPrice = +(
                  p.price *
                  (1 - (p.discount || 0) / 100)
                ).toFixed(2);
                return (
                  <article
                    key={p.id}
                    className="relative rounded-2xl overflow-hidden dark:bg-white bg-neutral-900 border border-neutral-700 shadow-lg"
                  >
                    <div className="aspect-[4/5] w-full relative">
                      {/* Replace with next/image if you want optimization */}
                      <img
                        src={p.cover}
                        alt={p.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="p-3 space-y-4 ">
                      <div className="lg:flex items-center  lg:flex-col-reverse">
                        <div className="text-xs text-center dark:bg-white dark:text-black mb-2 lg:px-2 py-1 px-1 w-25  rounded-sm  bg-neutral-800/50 border border-neutral-700">
                          {p.platforms.join(", ")}
                        </div>
                        <h4 className="text-[12px] dark:text-black lg:text-[16px] lg:mb-2  font-semibold line-clamdp-2">
                          {p.title}
                        </h4>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          {p.discount ? (
                            <div className="flex items-baseline gap-2  max-lg:flex-col ">
                              <span className="text-sm dark:text-black ">
                                {sp(finalPrice)} تومان
                              </span>
                              <div className="  lg:flex  lg:flex-row-reverse lg:gap-2 justify-center lg:items-center">
                                <span className="text-xs dark:text-gray-800 line-through text-neutral-400">
                                  {sp(p.price)}
                                </span>
                                <span className="text-xs bg-emerald-600/80 px-2 py-1 rounded">
                                  -{p.discount}%
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <span className="text-sm font-bold dark:text-black">
                                {sp(p.price)} تومان
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="text-xs text-neutral-400 dark:text-gray-700">
                          {p.rating} ⭐
                        </div>
                      </div>
                      <div className="flex items-center max-lg:gap-2 justify-between">
                        <ProductCard
                          key={p.id}
                          product={p}
                          available={p.available}
                        />
                        {/* <Shopcart /> */}

                        <button className="px-3 py-2 rounded-xl dark:bg-white dark:text-black border border-neutral-700">
                          جزئیات
                        </button>
                      </div>
                      <Link
                        href="/dashboard/checkout"
                        className="text-center flex justify-center "
                      >
                        🛒
                      </Link>
                    </div>

                    {/* hover neon outline */}
                    <div className="absolute inset-0 pointer-events-none rounded-2xl ring-0 transition-all duration-200"></div>
                  </article>
                );
              })}

              {productsFiltered.length === 0 && (
                <div className="col-span-full text-center text-neutral-400 py-20">
                  هیچ نتیجه‌ای پیدا نشد.
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
