import React from "react";
import DashboardCard from "./DashboardCard";

function MyProfilePage({ profiles }) {
  // console.log({ profiles });
  return (
    <div>
      {profiles.length ? null : (
        <p className="dark:text-black">هیچ آگهی ثبت نشده</p>
      )}

      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilePage;
23285;
