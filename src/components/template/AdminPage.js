import React from "react";
import AdminCard from "../module/AdminCard";

function AdminPage({ profiles }) {
  return (
    <div className="lg:grid lg:grid-cols-6">
      {profiles.length ? null : (
        <p className="dark:text-black">هیچ آگهی وجود ندارد</p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
