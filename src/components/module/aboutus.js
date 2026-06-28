import React from "react";

function Aboutus() {
  return (
    <div className="container m-auto px-8 py-10  ">
      <h4 className="text-sm text-white dark:text-black mb-5 lg:text-xl">
        چرا گیم مکس ؟
      </h4>
      <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        <li className="bg-gray-800  rounded-sm p-2 text-center dark:text-black dark:bg-gray-300">
          پرداخت در محل
        </li>
        <li className="bg-gray-800 rounded-sm p-2 text-center dark:text-black dark:bg-gray-300">
          پشتیبانی سریع
        </li>
        <li className="bg-gray-800 rounded-sm p-2 text-center dark:text-black dark:bg-gray-300">
          ضمانت اصالت کالا
        </li>
        <li className="bg-gray-800 rounded-sm p-2 text-center dark:text-black dark:bg-gray-300">
          پاسخگویی سریع
        </li>
      </ul>
    </div>
  );
}

export default Aboutus;
