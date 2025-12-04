import SellGame from "@/src/components/template/SellGame";
import Profile from "@/src/models/Profile";
import ConnectDB from "@/src/utils/ConnectDB";
import React from "react";
export const metadata = {
  title: " گیم مکس | آگهی های بازی",
  description: "سایت فروش بازی",
};

async function page({ searchParams }) {
  const resolvedParams = await searchParams;
  await ConnectDB();
  const profiles = await Profile.find({ published: true });
  // console.log(profiles);
  if (profiles.error) return <h4>مشکلی پیش آمده است.</h4>;
  let finalData = profiles;
  if (resolvedParams.category) {
    finalData = finalData.filter((i) => i.category === resolvedParams.category);
  }
  return (
    <div>
      <SellGame data={finalData} />
    </div>
  );
}

export default page;
