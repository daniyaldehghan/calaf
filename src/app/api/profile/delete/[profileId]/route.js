import Profile from "@/src/models/Profile";
import User from "@/src/models/User";
import ConnectDB from "@/src/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await ConnectDB();
    const { profileId } = await context.params;
    console.log(profileId);
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "ابتدا به حساب کاربری وارد شورید " });
    }
    const user = await User.findOne({ email: session.user.email });
    //     console.log(user);
    if (!user) {
      return NextResponse.json(
        { error: "حساب با این نام کاربری یافت نشد" },
        { status: 401 }
      );
    }
    const profile = await Profile.findOne({ _id: profileId });
    console.log("send", profile);
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }
    const res = await Profile.deleteOne({ _id: profileId });
    console.log("res", res);
    return NextResponse.json(
      { message: "آگهی با موفقیت حذف شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "خطایی در سررور رخ داده است!" },
      { status: 500 }
    );
  }
}
