import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

function Shopcart() {
  const { data } = useSession();
  console.log(data);
  if (!data) {
    <Link href="/signin">sas</Link>;
  }

  return (
    <div>
      {data ? <Link href="/dashboard/checkout">🛒</Link> : null}
      <Toaster />
    </div>
  );
}

export default Shopcart;
