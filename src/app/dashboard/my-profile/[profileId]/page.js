import AdminCard from "@/src/components/module/AdminCard";
import AddProfile from "@/src/components/template/AddProfile";
import Profile from "@/src/models/Profile";
import React from "react";

async function Edit({ params }) {
  const { profileId } = await params;
  console.log(params);
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>دوباره امتحان کنید</h3>;
  return (
    <>
      <AddProfile data={JSON.parse(JSON.stringify(profile))} />
      {/* <AdminCard data={JSON.parse(JSON.stringify(profile))} /> */}
    </>
  );
}

export default Edit;
