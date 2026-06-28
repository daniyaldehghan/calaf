import Profile from "@/src/models/Profile";
import User from "@/src/models/User";
import ConnectDB from "@/src/utils/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    await ConnectDB();
    const { profileId } = await params;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری شوید" },
        { status: 401 }
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json({ error: "دسترسی محدود" }, { status: 401 });
    }
    const profile = await Profile.findOne({ _id: profileId });
    profile.published = true;
    profile.save();
    return NextResponse.json(
      { message: "آگهی با موفقیت انتشار شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "خطایی در سررور رخ داده است!" },
      { status: 500 }
    );
  }
}
