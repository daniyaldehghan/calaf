import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/src/models/User";
import Profile from "@/src/models/Profile";
import DashboardSide from "@/src/components/layout/DashboardSide";
import AdminPage from "@/src/components/template/AdminPage";

async function page() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");
  const profiles = await Profile.find({ published: false });
  return (
    <DashboardSide role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSide>
  );
}

export default page;
