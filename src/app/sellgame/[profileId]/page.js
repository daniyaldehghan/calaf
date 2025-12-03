import DetalesPage from "@/src/components/module/DetalesPage";
import Profile from "@/src/models/Profile";
import ConnectDB from "@/src/utils/ConnectDB";
import React from "react";

async function page({ params }) {
  const { profileId } = await params;
  await ConnectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی پیش آمده است!</h3>;
  console.log(profile);
  return <DetalesPage data={JSON.parse(JSON.stringify(profile))} />;
}

export default page;
// export const generateMetadata = async ({ params: { profileId } }) => {
//   await ConnectDB();
//   const profile = await Profile.findOne({ _id: profileId });

//   return {
//     //     title: profile.title,
//     description: profile.description,
//     authors: { name: profile.realState },
//     other: { mytag: "test meta tag" },
//   };
// };
