import React from "react";
import AdminCard from "../module/AdminCard";

function AdminPage({ profiles }) {
  console.log(profiles);
  return (
    <div>
      {profiles.length ? null : <p>هیچ آگهی وجود ندارد</p>}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
