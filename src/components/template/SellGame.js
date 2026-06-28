import React from "react";
import SideBar from "../module/SideBar";
import Card from "../module/CardPage";
import Typer from "../module/TypeAnimation";

function SellGame({ data }) {
  console.log(data);
  return (
    <div className="px-8 py-10 dark:bg-white   ">
      <div>
        <Typer
          words={
            "از طریق پنل کاربری آگهی های خود را ثبت کنید تا به بهترین قیمت به فروش برسانید!"
          }
        />
      </div>
      <div className="flex max-lg:flex-col gap-5 ">
        <div className="  lg:h-200 lg:sticky top-8 space-y-4">
          <SideBar />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gasp-40 lg:w-350 lg:h-full">
          {data.length ? null : (
            <p className="dark:text-black">آگهی ثبت نشده است</p>
          )}
          {data.map((profile) => (
            <Card key={profile._id} data={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellGame;
