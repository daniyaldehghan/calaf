// import CheckOut from "@/src/components/template/CheckOut";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CheckOut from "@/src/components/template/CheckOut";
import { authOptions } from "../../api/auth/[...nextauth]/route";

async function page() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  return (
    <div>
      <CheckOut />
    </div>
  );
}

export default page;
