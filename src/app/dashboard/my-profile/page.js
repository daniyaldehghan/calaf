import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import MyProfilePage from "@/src/components/module/MyProfilePage";
import ConnectDB from "@/src/utils/ConnectDB";
import Profile from "@/src/models/Profile";
import User from "@/src/models/User";

async function page() {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    // {
    //   $addFields: {
    //     _id: { $toString: "$_id" },
    //   },
    // },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  console.log(user);
  return <MyProfilePage profiles={user.profiles} />;
}

export default page;
