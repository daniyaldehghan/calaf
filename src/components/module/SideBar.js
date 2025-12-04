// "use client";
import Link from "next/link";
async function SideBar() {
  const queryies = [
    { ps4: "ps4" },
    { ps5: "ps5" },
    { pc: "pc" },
    { xbox: "xbox" },
  ];
  return (
    <div className="flex lg:flex-col sticky  top-70 w-full lg:w-50 max-lg:mb-10   shadow-[0_1px_5px_0_#FFF] dark:shadow-[0_1px_5px_0_black] p-3 lg:h-70  gap-3 ">
      <p className="lg:text-2xl text-xs  dark:text-black max-lg:w-20 text-gray-400  ">
        دسته بندی
      </p>
      <div className="hidden lg:block border text-red-800 mt-2 mb-2 "></div>
      <div className=" flex lg:flex-col lg:gap-3 max-lg:justify-around max-lg:w-full max-lg:mt-5 ">
        <div className="bg-red-400">{queryies === "ps4"}</div>
        <Link href="/sellgame" className="dark:text-black">
          همه
        </Link>
        {queryies.map((query, inedx) => (
          <Link
            className="dark:text-black "
            key={inedx}
            href={{
              pathname: "/sellgame",
              query: { category: Object.keys(query) },
            }}
          >
            {Object.values(query)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
