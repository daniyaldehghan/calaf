import ConnectDB from "@/src/utils/ConnectDB";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/src/models/Uers";
import DashboardPage from "@/src/components/template/DashboardPage";

async function page() {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  return (
    <div>
      <DashboardPage createdAt={user.createdAt} />
    </div>
  );
}

export default page;
