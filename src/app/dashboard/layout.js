import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ConnectDB from "@/src/utils/ConnectDB";
import User from "@/src/models/Uers";
import Email from "next-auth/providers/email";
import DashboardSide from "@/src/components/layout/DashboardSide";
export const metadata = {
  // title: " پنل کاربری مشاوره | املاک",
};
async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  await ConnectDB();
  const user = await User.findOne({ email: session.user.email });
  if (!user) return <h3>مشکلی پیش آمده است.</h3>;
  return (
    <DashboardSide roule={user.roule} email={user.email}>
      {children}
    </DashboardSide>
  );
}

export default DashboardLayout;
