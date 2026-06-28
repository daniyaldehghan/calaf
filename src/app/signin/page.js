import Signin from "@/src/components/template/Signin";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <div>
      <Signin />
    </div>
  );
}

export default page;
