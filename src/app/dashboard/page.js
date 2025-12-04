import ConnectDB from "@/src/utils/ConnectDB";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardPage from "@/src/components/template/DashboardPage";
import User from "@/src/models/User";
export const metadata = {
  title: " گیم مکس | پنل کاربری",
  description: "سایت فروش بازی",
};
async function page() {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  return (
    <div>
      <DashboardPage createdAt={JSON.parse(JSON.stringify(user.createdAt))} />
    </div>
  );
}

export default page;
